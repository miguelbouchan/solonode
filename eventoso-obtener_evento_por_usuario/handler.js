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

connection.query('CALL OBTENER_EVENTOS_ACTIVIDADES_POR_USUARIO('+parseInt(event.id)+')', function (err2, rows) {
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
  var newid = json[0].IDEVENTO;
  var actividades = [];
  var ultimo = json.length - 1;
  var general = [];
  for (var i = 0; i < json.length; i++) {
    console.log("id actividad " + json[i].IDEVENTO)

    if (newid == json[i].IDEVENTO) {

      actividades.push(
        {
          "id_evento_actividad_usuario": json[i].IDEVENTOACTIVIDADUSUARIO,
          "id_actividad": json[i].IDACTIVIDAD,
          "descripcion_actividad": json[i].DESCRIPCION_ACTIVIDAD,
          "id_usuario": json[i].IDUSUARIO,
          "nombre_usuario": json[i].NOMBRE,
          "apellio_paterno": json[i].APELLIDO_PATERNO,
          "apellido_materno": json[i].APELLIDO_MATERNO
        })
    } else {
      var usuario = {
        "id_evento": json[i - 1].IDEVENTO,
        "descripcion": json[i - 1].DESCRIPCION,
        "direccion": json[i - 1].DIRECCION,
        "latitud": json[i - 1].LATITUD,
        "longitud": json[i - 1].LONGITUD,
        "fecha_evento": json[i - 1].FECHA_EVENTO,
        "id_categoria": json[i - 1].IDCATEGORIA,
        "id_estatus": json[i - 1].IDESTATUS,
        "categoria": json[i - 1].DESCRIPCION_CATEGORIA,
        "estatus": json[i - 1].DESCRIPCION_ESTATUS,
        "usuario_actividad": actividades
      };
      general.push(usuario)
      newid = json[i].IDEVENTO;
      actividades = [];
      actividades.push(
        {
          "id_evento_actividad_usuario": json[i].IDEVENTOACTIVIDADUSUARIO,
          "id_actividad": json[i].IDACTIVIDAD,
          "descripcion_actividad": json[i].DESCRIPCION_ACTIVIDAD,
          "id_usuario": json[i].IDUSUARIO,
          "nombre_usuario": json[i].NOMBRE,
          "apellio_paterno": json[i].APELLIDO_PATERNO,
          "apellido_materno": json[i].APELLIDO_MATERNO
        })
    }

    if (i == ultimo) {
      var usuario = {
        "id_evento": json[i].IDEVENTO,
        "descripcion": json[i].DESCRIPCION,
        "direccion": json[i].DIRECCION,
        "latitud": json[i].LATITUD,
        "longitud": json[i].LONGITUD,
        "fecha_evento": json[i].FECHA_EVENTO,
        "id_categoria": json[i].IDCATEGORIA,
        "id_estatus": json[i].IDESTATUS,
        "categoria": json[i].DESCRIPCION_CATEGORIA,
        "estatus": json[i].DESCRIPCION_ESTATUS,
        "usuario_actividad": actividades
      };
      general.push(usuario)
    }
  }
  //data
  return cb(null, {
    message: message,
    code: err,
    data: general
  });
}
};