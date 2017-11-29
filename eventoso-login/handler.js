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

  var user = event.usuario.toLowerCase();
  console.log("inicio login")
  connection.query("CALL BUQUEDA_USUARIO_CORREO('" + user + "')", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      console.log("tamaño: " + rows[0].length)
      if (rows[0].length > 0) {
        verificaCorreo(rows[0], event.password);
      } else {
        connection.query("CALL BUQUEDA_USUARIO_NICK('" + user + "')", function (err, rows2) {
          if (err2) {
            console.log("error " + err)
            respuestaServicio(1, "error al ejecutar sp: " + err, null)
          } else {
            console.log("tamaño: " + rows2[0].length)
            if (rows2[0].length > 0) {
              verificaCorreo(rows2[0], event.password);
            } else {
              respuestaServicio(1, "correo o nick inexistente", null)
            }
          }
        });
      }
    }
  });

  function verificaCorreo(datos,password){
    var newdata=JSON.stringify(datos);
    var json =  JSON.parse(newdata);
    console.log("-------------------------------")
    console.log(json[0].CONTRASENA);
    console.log("-------------------------------")
    if (!bcrypt.compareSync((password).trim(), json[0].CONTRASENA)){
              respuestaServicio(1, "Contraseña incorrecta", null)
    } else {
      console.log(json[0])
      json[0].CONTRASENA="";
      var usuario={
       "nombre":json[0].NOMBRE,
      "apellido_paterno":json[0].APELLIDO_PATERNO,
      "apellido_materno":json[0].APELLIDO_MATERNO,
      "correo":json[0].EMAIL,
      "edad":json[0].EDAD,
      "nick":json[0].NICKNAME,
      "id_puesto":json[0].IDPUESTO,
      "url_avatar":json[0].URLAVATAR,
      "token":json[0].TOKEN,
      "id_usuario":json[0].IDUSUARIO,
      "descripcion_rol":json[0].DESCRIPCION_ROL,
      "es_activo":json[0].ES_ACTIVO,
      "telefono":json[0].TELEFONO,
      "id_estado":json[0].ID_ESTADO,
      "estado":json[0].ESTADO
    };

    respuestaServicio(0, "llamada correcta", usuario)
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