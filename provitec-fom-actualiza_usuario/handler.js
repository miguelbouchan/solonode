'use strict'; const
mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');

module.exports.handler = function (event, context, cb) {
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
  multipleStatements: true
});

if (event.nombre == (null || undefined) ||
  event.apellido_paterno == (null || undefined) ||
  event.apellido_materno == (null || undefined) ||
  event.correo == (null || undefined) ||
  event.edad == (null || undefined) ||
  event.id_puesto == (null || undefined)) {
  respuestaServicio(1, "error al ejecutar sp: faltan datos de usuario", null)
} else {
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(event.correo)) {
    respuestaServicio(1, "error en el correo: no es un formato valido", null)
  } else {

    var token = event.token != undefined ? event.token : '';
    var url_avatar = event.url_avatar != undefined ? event.url_avatar : '';
    var medad = parseInt(event.edad);
    var idpuesto = parseInt(event.id_puesto);
    connection.query("CALL ACTUALIZAR_USUARIO('"+event.nombre+"','"+event.apellido_paterno+"','"+event.apellido_materno+"',"+medad+",'"+event.correo+"',"+idpuesto+",'"+token+"','"+url_avatar+"');", function (err2, rows) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        console.log(rows[0])
        respuestaServicio(0, "llamada correcta", rows[0])
      }
    });
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