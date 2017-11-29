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

  connection.query('CALL TODOS_USUARIOS()', function (err2, rows) {
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
    console.log("--------------------------------------")
    console.log(json[0])
    for(var i=0;i<json.length;i++){
      var usuario={
        "nombre":json[i].NOMBRE,
        "apellido_paterno":json[i].APELLIDO_PATERNO,
        "apellido_materno":json[i].APELLIDO_MATERNO,
        "correo":json[i].EMAIL,
        "edad":json[i].EDAD,
        "nick":json[i].NICKNAME,
        "id_rol":json[i].IDROL,
        "url_avatar":json[i].URLAVATAR,
        "token":json[i].TOKEN,
        "id_usuario":json[i].IDUSUARIO,
        "telefono":json[i].TELEFONO,
        "id_estado":json[i].ID_ESTADO,
        "estado":json[i].ESTADO,
        "descripcion_rol":json[i].DESCRIPCION_ROL,
        "rol":json[i].DESCRIPCIONROL,
        "es_activo":json[i].ES_ACTIVO
    };
      info.push(usuario);
    }
    //data
    return cb(null, {
      message: message,
      code: err,
      data: info
    });
  }
};