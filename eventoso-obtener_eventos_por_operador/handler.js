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

connection.query('CALL OBTENER_EVENTOS_POR_OPERADOR('+parseInt(event.id_operador)+')', function (err2, rows) {
  if (err2) {
    console.log("error " + err2)
    respuestaServicio(1, "error al ejecutar sp: " + err2, null)
  } else {
    console.log(rows[0])
    respuestaServicio(0, "llamada correcta", rows[0])
  }
});

function respuestaServicio(err, message, data) {
  connection.destroy();
  var info = [];
  var newdata = JSON.stringify(data);
  var json = JSON.parse(newdata);
  console.log("--------------------------------------")
  console.log(json[0])
  var general = [];
  for (var i = 0; i < json.length; i++) {
    var evento=
    {
      "id_evento_usuario": json[i].IDEVENTUSUAR,
      "id_evento": json[i].IDEVENTO,
      "descripcion": json[i].DESCRIPCION,
      "direccion": json[i].DIRECCION,
      "latitud": json[i].LATITUD,
      "longitud": json[i].LONGITUD,
      "fecha_evento": json[i].FECHA_EVENTO
    }
    general.push(evento)
  }
  //data
  return cb(null, {
    message: message,
    code: err,
    data: general
  });
}
};