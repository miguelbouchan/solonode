'use strict'; const
mysql = require('mysql');
var async = require('async')

module.exports.handler = function (event, context, cb) {
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    multipleStatements: true
  });

  var general_evento=event.general;
  var usuarios=[];
  for(var i=0;i<general_evento.length;i++){
    var user={
      id_user:general_evento[i].id_usuario,
      id_evento:general_evento[i].id_evento
    }
    usuarios.push(user);
  }
  agregar_varios_usuarios(usuarios)

  function agregar_varios_usuarios(usuarios){
    try {
      async.each(usuarios, function (usuario, callback) {
        console.log('Processing operador ' + user.token_user);

        connection.query("CALL AGREGAR_USUARIO_A_EVENTO('FOM-SERVICE',"+usuario.id_evento+","+usuario.id_user+")", function (err2, rows) {
          if (err2) {
            console.log("error " + err2)
            callback(true, err2)
          } else {
            callback();
          }
        });
      }, function (err) {
        if (err) {
          respuestaServicio(1, "error al ejecutar sp: " + err, null)
        } else {
          respuestaServicio(0, "llamada correcta", null)
        }
      });
    } catch (e) {
      respuestaServicio(0, "error al ejecutar sp: " + e, null)
    }

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