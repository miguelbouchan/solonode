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

var id_user_1 = event.usuario1;
var id_user_2 = event.usuario2;
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
      buscar_conversacion_b(id_user_1, id_user_2);
    }
    else {
      var newdata = JSON.stringify(rows[0]);
      var json = JSON.parse(newdata);
      console.log("--------------------------------------")
      console.log(json[0])
      buscar_mensajes(json[0].IDCONVERSACION);
    }
    //respuestaServicio(0, "llamada correcta", rows[0])

  }
});

function buscar_conversacion_b(id_user_1, id_user_2) {
  connection.query("CALL BUSCA_CONVERSACION_B(" + id_user_1 + "," + id_user_2 + ")", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      console.log("B-------------------------------")
      console.log(rows[0])
      console.log("-------------------------------")

      if (rows[0].length == 0) {
        respuestaServicio(1, "error al ejecutar sp: no hay mensajes entre esos usuarios", null)
      }
      else {
        var newdata = JSON.stringify(rows[0]);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        buscar_mensajes(json[0].IDCONVERSACION);
      }
    }
  });
}

function buscar_mensajes(id_conversacion) {
  console.log("************************************")
  console.log(id_conversacion)

  connection.query("CALL OBTENER_MENSAJES("+id_conversacion+")", function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      var info=[];
      var newdata = JSON.stringify(rows[0]);
      var json = JSON.parse(newdata);
      console.log("--------------------------------------")
      console.log(json[0])
      for(var i=0;i<json.length;i++){
        var mensajes={
          id_mensaje:json[i].IDMENSAJE,
          id_usuario:json[i].ID_USUARIO,
          nombre:json[i].NOMBRE,
          apellido_paterno:json[i].APELLIDO_PATERNO,
          apellido_materno:json[i].APELLIDO_MATERNO,
          url_avatar:json[i].URLAVATAR,
          mensaje:json[i].MENSAJE
        }
        info.push(mensajes);
      }
      respuestaServicio(0, "llamada correcta a", info)
    }
  });
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