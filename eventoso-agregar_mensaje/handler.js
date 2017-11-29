'use strict'; const
  mysql = require('mysql');
  var FCM = require('fcm-push');
  var async = require('async')
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

  var id_user_1 = event.usuario1;
  var id_user_2 = event.usuario2;
  var user_i = event.usuario_emisor;
  var mensajec = event.mensaje;
  var hostname = "FOM_SERVICE"

  connection.query("CALL BUSCA_CONVERSACION_A(" + id_user_1 + "," + id_user_2 + ")", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      console.log("A-------------------------------")
      console.log(rows[0].length)
      console.log("-------------------------------")
      if (rows[0].length == 0) {
        buscar_conversacion_b(id_user_1, id_user_2, mensajec, user_i);
      }
      else {
        var newdata = JSON.stringify(rows[0]);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        agregar_mensaje(json[0].IDCONVERSACION, mensajec, user_i,id_user_1, id_user_2);
      }
      //respuestaServicio(0, "llamada correcta", rows[0])

    }
  });

  function buscar_conversacion_b(id_user_1, id_user_2, mensajec, user_i) {
    connection.query("CALL BUSCA_CONVERSACION_B(" + id_user_1 + "," + id_user_2 + ")", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        console.log("B-------------------------------")
        console.log(rows[0])
        console.log("-------------------------------")

        if (rows[0].length == 0) {
          crear_conversacion(id_user_1, id_user_2, mensajec, user_i);
        }
        else {
          var newdata = JSON.stringify(rows[0]);
          var json = JSON.parse(newdata);
          console.log("--------------------------------------")
          console.log(json[0])
          agregar_mensaje(json[0].IDCONVERSACION, mensajec, user_i,id_user_1, id_user_2);
        }
      }
    });
  }

  function crear_conversacion(id_user_1, id_user_2, mensajec, user_i) {
    console.log("se crea una nueva conversacion")

    connection.query("CALL CREAR_CONVERSACION(" + id_user_1 + "," + id_user_2 + ",'FOM_SERVICE')", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        var newdata = JSON.stringify(rows[0]);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        agregar_mensaje(json[0].INSERTED, mensajec, user_i,id_user_1, id_user_2)
      }
    });
  }

  function agregar_mensaje(id_conversacion, mensajec, user_i,id_user_1, id_user_2) {
    console.log("************************************")
    console.log(id_conversacion)

    connection.query("CALL CREAR_MENSAJE("+id_conversacion+", "+ user_i + ",'" + mensajec + "','FOM_SERVICE')", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        buscar_usuario(mensajec,user_i, id_user_1, id_user_2)
        //respuestaServicio(0, "llamada correcta", null)
      }
    });
  }

  function buscar_usuario(ccomentario,user_i, id_user_1, id_user_2){
    var id_nuevo_usuario;
    console.log("id user 1 "+ id_user_1 )
    console.log("id user 1 "+ id_user_2)
    if(user_i!=id_user_1){
        id_nuevo_usuario=id_user_1;
    } else {
        id_nuevo_usuario=id_user_2;
    }
    console.log("buscar usuario "+id_nuevo_usuario)
    connection.query("CALL BUSCAR_USUARIO_TOKEN (" + parseInt(id_nuevo_usuario) + ")", function (err2, rows) {
        if (err2) {
          console.log("error " + err2)
          respuestaServicio(1, "error al ejecutar sp: " + err2, null)
        } else {
          var newdata = JSON.stringify(rows[0]);
          var json = JSON.parse(newdata);
          console.log("----------------------------")
          console.log(json[0]);
          var token=null
          if(json.length>0){
            var token = json[0].TOKEN;
            mandar_notificaciones(token, ccomentario)
          } else {
            respuestaServicio(0, "llamada correcta", null)
          }
        }
      });
  }

  function mandar_notificaciones(token, ccomentario) {
    var fcm = new FCM(serverKey);

    var message = {
      to: token, // required fill with device token or topics
      collapse_key: 'provitec-fom',

      notification: {
        title: 'Has recibido un comentario',
        body: ccomentario
      }
    };

    fcm.send(message, function (err, response) {
      if (err) {
        respuestaServicio(0, "llamada correcta", null)
      } else {
        respuestaServicio(0, "llamada correcta", null)
      }
    });
    fcm.send(message)
      .then(function (response) {
        console.log("Successfully sent with response: ", response);
      })
      .catch(function (err) {
        console.log("Something has gone wrong pp!" + err);
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
};