'use strict'; const
mysql = require('mysql');

module.exports.handler = function (event, context, cb) {
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
  multipleStatements: true
});

  var estatus=event.id_estatus;
  var idevento_actividad=event.id_evento_actividad;
  var eshecho=event.hecho;
  var idusuario=event.id_usuario;

  connection.query("CALL CAMBIA_ACTIVIDAD_EVENTO(" + idevento_actividad + ","+eshecho+ ","+idusuario+")", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      respuestaServicio(0, "llamada correcta", rows[0])
    }
  });


function respuestaServicio(err, message, data) {
  connection.destroy();
  return cb(null, {
    message: message,
    code: err,
    data: data
  });
}
};