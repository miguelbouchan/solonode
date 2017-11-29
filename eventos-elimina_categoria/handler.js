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

  var tipo_puesto=event.puesto;
  var hostname="FOM_SERVICE"

  var valid=parseInt(event.id)

  connection.query("CALL ELIMINAR_CATEGORIA("+valid+");", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      console.log(rows[0])
      respuestaServicio(0, "llamada correcta", null)
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