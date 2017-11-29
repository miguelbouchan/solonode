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

  if (event.comentario == (null || undefined) ||
    event.id_evento == (null || undefined) ||
    event.id_usuario == (null || undefined) ||
    event.fecha_comentario == (null || undefined)) {
    respuestaServicio(1, "error al ejecutar sp: faltan datos para agregar comentario" + err2, null)
  } else {

    var ccomentario = event.comentario;
    var hostname = "FOM_SERVICE"
    var idevento = parseInt(event.id_evento);
    var idusuario = parseInt(event.id_usuario);
    var fechacomentario = event.fecha_comentario;

    connection.query("CALL CREAR_COMENTARIO('" + ccomentario + "','FOM_SERVICE'," + idevento + "," + idusuario + ",'" + fechacomentario + "')", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        //respuestaServicio(0, "llamada correcta", rows[0])
        preparar_notificaciones(idevento, ccomentario, idusuario)
      }
    });
  }

  function preparar_notificaciones(idevento, ccomentario, idusuario) {
    connection.query("CALL OBTENER_USUARIOS_POR_EVENTO_NO_COMENT(" + idevento + ")", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp - al obhtener usuarios por evento: " + err2, null)
      } else {

        var newdata = JSON.stringify(rows);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        var general = [];
        for (var i = 0; i < json[0].length; i++) {
          if (json[0][i].TOKEN != null && json[0][i].TOKEN.length > 0 && json[0][i].TOKEN != undefined) {
            if (json[0][i].IDUSUARIO != idusuario) {
              var evento =
                {
                  "token_user": json[0][i].TOKEN,
                  "id_evento": json[0][i].IDEVENTO
                }
              general.push(evento)
            }
          }

        }

        if (general.length > 0) {
          try {
            async.each(general, function (user, callback) {
              console.log('Processing operador ' + user.token_user);
              mandar_notificaciones(user.token_user, ccomentario, callback, function (err, response) {
                if (err) {
                  callback();
                } else {
                  callback();
                }
              })
            }, function (err) {
              if (err) {
                console.log('A data failed to process');
                respuestaServicio(0, "error al enviar notificaciones: " + err, null)
              } else {
                respuestaServicio(0, "llamada correcta: notificaciones enviadas correctamente", null)
              }
            });
          } catch (e) {
            respuestaServicio(0, "llamada correcta: " + e, null)
          }

        } else {
          respuestaServicio(0, "llamada correcta: notificaciones enviadas", null)
        }

      }
    });
  }

  function mandar_notificaciones(token, ccomentario, callback) {
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
        console.log("Something has gone wrong!" + err);
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