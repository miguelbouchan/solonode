'use strict'; const
  mysql = require('mysql');
var async = require('async');
var FCM = require('fcm-push');
var serverKey = 'AAAAYgcxZPU:APA91bGq5xDmVKtpvwZkmzvt06IoFGFSk7QtDXEGkRloIjrw3PfG9S_t1YJtLJhjiZujv7jpqrnHvD8X-A-VVLiGGD0SeUK_v5zi1JE5oMDDVEO1BdKLeibJjI2WbNHbdvUJd1tbvdFE';
var fcm = new FCM(serverKey);

module.exports.handler = function (event, context, cb) {
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    multipleStatements: true
  });

  if (event.descripcion == (null || undefined) ||
    event.direccion == (null || undefined) ||
    event.latitud == (null || undefined) ||
    event.longitud == (null || undefined) ||
    event.id_categoria == (null || undefined) ||
    event.id_estatus == (null || undefined)) {
    respuestaServicio(1, "error al ejecutar sp: faltan datos de evento", null)
  } else if (event.actividad.length == 0 || event.actividad.length == undefined) {
    respuestaServicio(1, "error al ejecutar sp: se requiere almenos una actividad por evento", null)
  }
  else if (event.operadores.length == 0 || event.operadores.length == undefined) {
    respuestaServicio(1, "error al ejecutar sp: se requiere almenos un operador por evento", null)
  }
  else if (event.analistas.length == 0 || event.analistas.length == undefined) {
    respuestaServicio(1, "error al ejecutar sp: se requiere almenos un analista por evento", null)
  }
  else {
    var idcategoria = parseInt(event.id_categoria);
    var idestatus = parseInt(event.id_estatus);
    var newdate = event.fecha_evento != null ? event.fecha_evento : "";
    connection.query("CALL CREAR_EVENTO('" + event.descripcion + "','" + event.direccion + "','" + event.latitud + "','" + event.longitud + "','FOM-SERVICE','" + newdate + "'," + idcategoria + "," + idestatus + ");", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        console.log(rows[0])
        var newdata = JSON.stringify(rows[0]);
        var json = JSON.parse(newdata);
        console.log("insertado en: " + json[0].INSERTED)
        add_activities(json[0].INSERTED, event.descripcion)
      }
    });
  }

  function add_activities(id_evento,descripcion) {
    var nuevas_actividades = [];
    for (var i = 0; i < event.actividad.length; i++) {
      var rol = {
        id_actividad: event.actividad[i].id_actividad,
        id_usuario: event.actividad[i].id_usuario
      }
      nuevas_actividades.push(rol);
    }

    async.each(nuevas_actividades, function (act, callback) {
      console.log('Processing file ' + act.id_actividad);
      var sentencia = "CALL CREAR_EVENTO_ACTIVIDAD_USUARIO(0,'FOM_SERVICE',8," + id_evento + "," + act.id_actividad + ")";
      console.log("---------------------------------------")
      console.log(sentencia)
      console.log("---------------------------------------")
      connection.query(sentencia, function (err2, rows) {
        if (err2) {
          callback(true, err2);
          console.log("error al ejecutar sp: " + err2)
        } else {
          callback();
        }
      });
    }, function (err) {
      if (err) {
        console.log('A data failed to process');
        respuestaServicio(1, "error al ejecutar sp: " + err, null)
      } else {
        agregarOperadores(id_evento,descripcion)
      }
    });
  }

  function agregarOperadores(id_evento, descripcion) {
    var nuevos_operadores = [];
    for (var i = 0; i < event.operadores.length; i++) {
      var operador = {
        id_operador: event.operadores[i].id_operador,
        es_encargado: event.operadores[i].encargado
      }
      nuevos_operadores.push(operador);
    }

    async.each(nuevos_operadores, function (user, callback) {
      console.log('Processing operador ' + user.id_operadores);
      var sentencia = "CALL INSERTAR_EVENTO_USUARIO('FOM_SERVICE'," + user.id_operador + "," + id_evento + ","+user.es_encargado+")";
      console.log("---------------------------------------")
      console.log(sentencia)
      console.log("---------------------------------------")
      connection.query(sentencia, function (err2, rows) {
        if (err2) {
          callback(true, err2);
          console.log("error al ejecutar sp: " + err2)
        } else {
          callback();
        }
      });
    }, function (err) {
      if (err) {
        console.log('A data failed to process');
        respuestaServicio(1, "error al ejecutar sp: " + err, null)
      } else {
        agregarAnalistas(id_evento, descripcion);
      }
    });
  }

  function agregarAnalistas(id_evento, descripcion) {
    var nuevos_analistas = [];
    for (var i = 0; i < event.analistas.length; i++) {
      var analista = {
        id_analista: event.analistas[i].id_analista,
      }
      nuevos_analistas.push(analista);
    }

    async.each(nuevos_analistas, function (user, callback) {
      console.log('Processing analista ' + user.id_analista);
      var sentencia = "CALL INSERTAR_EVENTO_USUARIO('FOM_SERVICE'," + user.id_analista + "," + id_evento + ",0)";
      console.log("---------------------------------------")
      console.log(sentencia)
      console.log("---------------------------------------")
      connection.query(sentencia, function (err2, rows) {
        if (err2) {
          callback(true, err2);
          console.log("error al ejecutar sp: " + err2)
        } else {
          callback();
        }
      });
    }, function (err) {
      if (err) {
        console.log('A data failed to process');
        respuestaServicio(1, "error al ejecutar sp: " + err, null)
      } else {
        //respuestaServicio(0, "llamada correcta:evento creado exitosamente", null)
        console.log("preparando notificaicones")
        preparar_notificaciones(id_evento, descripcion )
      }
    });
  }

  function preparar_notificaciones(id_evento, descripcion) {
    console.log("id evento: "+id_evento)
    connection.query("CALL OBTENER_USUARIOS_POR_EVENTO_NO_COMENT(" + id_evento + ")", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp - al obhtener usuarios por evento: " + err2, null)
      } else {
        console.log(rows)
        var newdata = JSON.stringify(rows);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        var general = [];
        for (var i = 0; i < json[0].length; i++) {
          if (json[0][i].TOKEN != null && json[0][i].TOKEN.length > 0 && json[0][i].TOKEN != undefined) {
            var evento =
              {
                "token_user": json[0][i].TOKEN,
                "id_evento": json[0][i].IDEVENTO
              }
            general.push(evento)
          }

        }

        if (general.length > 0) {
          try{
          async.each(general, function (user, callback) {
            console.log('Processing operador ' + user.token_user);
            mandar_notificaciones(user.token_user, descripcion, callback, function (err, response) {
              if (err) {
                callback();
              } else {
                callback();
              }
            })
          }, function (err) {
            if (err) {
              console.log('A data failed to process'+err);
              respuestaServicio(0, "error al enviar notificaciones: " + err, null)
            } else {
              respuestaServicio(0, "llamada correcta: notificaciones enviadas correctamente", null)
            }
          });
        } catch(e){
          console.log("error "+e)
          respuestaServicio(0, "llamada correcta: "+e, null)
        }

        } else {
          respuestaServicio(0, "llamada correcta: notificaciones enviadas", null)
        }

      }
    });
  }

  function mandar_notificaciones(token, descripcion, callback) {
    var fcm = new FCM(serverKey);

    var message = {
      to: token, // required fill with device token or topics
      collapse_key: 'provitec-fom',

      notification: {
        title: 'Te han asignado un evento',
        body: 'Fecha : ' + event.fecha_evento
      }
    };

    fcm.send(message, function (err, response) {
      if (err) {
        console.log("Something has gone wrong!"+err);
        callback();
      } else {
        console.log("Successfully sent with response: ", response);
        callback();
      }
    });
    fcm.send(message)
      .then(function (response) {
        console.log("Successfully sent with response: ", response);
      })
      .catch(function (err) {
        console.log("Something has gone wrong pp!"+err);
        console.error(err);
      })
  }


  function respuestaServicio(err, message, data) {
    connection.destroy();
    return cb(null, {
      message: message,
      code: err,
      data: data
    });
  }

}