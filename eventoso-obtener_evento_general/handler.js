'use strict'; const
  mysql = require('mysql');
var async = require('async');

module.exports.handler = function (event, context, cb) {
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    multipleStatements: true
  });

  connection.query('CALL EVENTOG(' + event.id_evento + ')', function (err2, rows) {
    if (err2) {
      console.log("error " + err2)
      respuestaServicio(1, "error al ejecutar sp: " + err2, null)
    } else {
      console.log(rows[0])
      var newdata = JSON.stringify(rows[0]);
      var json = JSON.parse(newdata);
      var evento =
        {
          "id_evento": json[0].IDEVENTO,
          "descripcion": json[0].DESCRIPCION,
          "direccion": json[0].DIRECCION,
          "latitud": json[0].LATITUD,
          "longitud": json[0].LONGITUD,
          "fecha_evento": json[0].FECHA_EVENTO,
          "id_categoria": json[0].IDCATEGORIA,
          "id_estatus": json[0].IDESTATUS,
          "categoria": json[0].DESCRIPCION_CATEGORIA,
          "estatus": json[0].DESCRIPCION_ESTATUS,
        }
      obtener_actividad(evento, event.id_evento)
    }
  });//end conection

  function obtener_actividad(evento, id_evento) {
    connection.query('CALL OBTENER_ACTIVIDADES_DE_EVENTOS(' + id_evento + ')', function (err2, rows2) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        console.log(rows2[0])
        var info = [];
        var newdata = JSON.stringify(rows2[0]);
        var json = JSON.parse(newdata);
        console.log("--------------------------------------")
        console.log(json[0])
        for (var i = 0; i < json.length; i++) {
          var rol = {
            id_actividad: json[i].IDEVENTOACTIVIDADUSUARIO,
            descripcion: json[i].DESCRIPCION_ACTIVIDAD
          }
          info.push(rol);
        }
        console.log("--------------------------------------")
        console.log(info)
        console.log("--------------------------------------")
        var datos = { "evento": evento, "actividades": info }
        obtener_usuario_de_actividad(evento, info, id_evento)
      }

    })
  }


  function obtener_usuario_de_actividad(evento, actividad, id_evento) {
    var nuevoarr_actividades = []

    async.each(actividad, function (actividades, callback) {

      connection.query('CALL OBTENER_ACTIVIDAD_USUARIO(' + actividades.id_actividad + ')', function (err2, rows2) {
        if (err2) {
          console.log("error " + err2)
          respuestaServicio(1, "error al ejecutar sp: " + err2, null)
          callback(true, err2);
        } else {
          console.log(rows2[0])
          var info = [];
          var newdata = JSON.stringify(rows2[0]);
          var json = JSON.parse(newdata);
          var rol = {
            id_actividad: actividades.id_actividad,
            descripcion: actividades.descripcion,
            hecha: json[0].ACTIVIDAD_HECHA,
            id_usuario: json[0].IDUSUARIO,
            nombre: json[0].NOMBRE,
            apellido_paterno: json[0].APELLIDO_PATERNO,
            apellido_materno: json[0].APELLIDO_MATERNO,
            url_avatar: json[0].URLAVATAR
          }
          nuevoarr_actividades.push(rol);
          // Perform operation on file here.
          callback();
        }
      });

    }, function (err) {
      // if any of the file processing produced an error, err would equal that error
      if (err) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('A data failed to process');
      } else {

        console.log('All data have been processed successfully');
        obtener_usuario(evento, nuevoarr_actividades, id_evento)
      }
    });
  }

  function obtener_usuario(evento, actividad, id_evento) {
    connection.query('CALL OBTENER_USUARIOS_DE_EVENTOS(' + id_evento + ')', function (err2, rows2) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        console.log(rows2[0])
        var info = [];
        var rol2 = [];
        var rol3 = [];
        var newdata = JSON.stringify(rows2[0]);
        var json = JSON.parse(newdata);
        for (var i = 0; i < json.length; i++) {
          var rol = {
            id_usuaro: json[i].ID_USUAIO,
            nombre: json[i].NOMBRE,
            url_avatar: json[i].URLAVATAR,
            encargado:json[i].ENCARGADO
          }
          if (json[i].IDROL == 2) {
            rol2.push(rol)
          } else {
            rol3.push(rol)
          }
        }
        var datos = {
          "evento": evento, "actividades": actividad, "operadores": rol2, "analistas": rol3,
          "comentarios": [
            {
              "id_comentario": null,
              "descripcion": null,
              "usuario": null
            }
          ],
          "fotos": [{
            "id_foto": null,
            "url_foto": null,
            "usuario": null
          }]
        }
        obtenerComentarios(evento, actividad, rol2, rol3, id_evento)
      }
    })
  }

  function obtenerComentarios(evento, actividad, rol2, rol3, id_evento) {
    connection.query('CALL OBTENER_COMENTARIOS(' + id_evento + ')', function (err2, rows2) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        var info = [];
        var newdata = JSON.stringify(rows2[0]);
        var json = JSON.parse(newdata);
        if (json.length != undefined && json.length > 0) {
          for (var i = 0; i < json.length; i++) {
            var rol = {
              id_comentario: json[i].IDEVENTCOMENT,
              descripcion: json[i].COMENTARIO,
              id_usuario: json[i].IDUSUARIO,
              nombre: json[i].NOMBRE,
              apellido_paterno: json[i].APELLIDO_PATERNO,
              apellido_materno: json[i].APELLIDO_MATERNO,
              url_avatar: json[i].URLAVATAR,
              fecha_comentario: json[i].FECHCOMENT
            }
            info.push(rol);
          }
        }
        else {
          info = [];
        }


        var datos = {
          "evento": evento,
          "actividades": actividad,
          "operadores": rol2,
          "analistas": rol3,
          "comentarios": info,
          "fotos": [{
            "id_foto": null,
            "url_foto": null,
            "usuario": null
          }]
        }

        obtener_fotos_de_eventos(evento,actividad,rol2,rol3,info,id_evento)
        
      }
    })
  }

  function obtener_fotos_de_eventos(evento,actividad,rol2,rol3,info,id_evento){
    console.log("id_evento: "+id_evento)
    connection.query('CALL BUSCAR_IMAGEN(' + id_evento + ')', function (err2, rows2) {
      if (err2) {
        console.log("error " + err2)
        respuestaServicio(1, "error al ejecutar sp: " + err2, null)
      } else {
        var info2 = [];
        
        var newdata = JSON.stringify(rows2[0]);
        var json = JSON.parse(newdata);
        console.log(json)
        if (json.length != undefined && json.length > 0) {
          for (var i = 0; i < json.length; i++) {
            var rol = {
              id_foto: json[i].IDEVENTFOTO,
              url_foto: json[i].FOTOURL,
              id_usuario: json[i].IDUSUARIO,
              nombre: json[i].NOMBRE,
              apellido_paterno: json[i].APELLIDO_PATERNO,
              apellido_materno: json[i].APELLIDO_MATERNO,
              url_avatar: json[i].URLAVATAR
            }
            info2.push(rol);
          }
        }
        else {
          info2 = [];
        }

        var datos = {
          "evento": evento,
          "actividades": actividad,
          "operadores": rol2,
          "analistas": rol3,
          "comentarios": info,
          "fotos": info2
        }
        respuestaServicio(0, "info correcta", datos)

  }
})}

  function respuestaServicio(err, message, data) {
    connection.destroy();
    return cb(null, {
      message: message,
      code: err,
      data: data
    });
  }
  //data

}