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
  event.telefono == (null || undefined) ||
  event.id_estado == (null || undefined) ||
  event.nick == (null || undefined) ||
  event.password == (null || undefined) ||
  event.id_rol == (null || undefined)) {
  respuestaServicio(1, "error al ejecutar sp: faltan datos de usuario", null)
} else {
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(event.correo)) {
    respuestaServicio(1, "error en el correo: no es un formato valido", null)
  } else {
    var token = event.token != undefined ? event.token : "";
    token = token != null ? token : "";
    var url_avatar = event.url_avatar != undefined ? event.url_avatar : "";
    url_avatar = url_avatar != null ? url_avatar : "";
    var medad = parseInt(event.edad);
    var pass = bcrypt.hashSync(event.password.trim());
    var idrol = parseInt(event.id_rol);
    var micorreo = event.correo.toLowerCase();
    var minick = event.nick.toLowerCase();
    var eslatitud = event.latitud != null ? event.latitud : "";
    var eslongitud = event.longitud != null ? event.longitud : "";
    var nuevotelefono = event.telefono.toString();
    
    console.log("nuevo telefono: "+nuevotelefono)
    connection.query("CALL CREAR_USUARIO('"+event.nombre+"','"+event.apellido_paterno+"','"+event.apellido_materno+"',"+medad+",'"+micorreo+"','"+minick+"','"+pass+"','FOM_SERVICE',"+idrol+",'"+token+"','"+url_avatar+"','"+event.descripcion_rol+"',1,"+nuevotelefono+","+event.id_estado+",'"+eslatitud+"','"+eslongitud+"');", function (err2, rows) {
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