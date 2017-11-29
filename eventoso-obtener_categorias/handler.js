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

  connection.query('CALL OBTENER_CATEGORIAS()', function (err2, rows) {
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
    var info=[];
    var newdata=JSON.stringify(data);
    var json =  JSON.parse(newdata);
    for(var i=0;i<json.length;i++){
      var rol={
        id_categoria:json[i].IDCATEGORIA,
        descripcion:json[i].DESCRIPCION,
        es_activo:json[i].ES_ACTIVO
      }
      info.push(rol);
    }
    //data
    return cb(null, {
      message: message,
      code: err,
      data: info
    });
  }
};