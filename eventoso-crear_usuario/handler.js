"use strict";
const mysql = require("mysql");
var bcrypt = require("bcrypt-nodejs");
// load aws sdk
var aws = require("aws-sdk");
var nodemailer = require("nodemailer");

module.exports.handler = function(event, context, cb) {
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    multipleStatements: true
  });

  if (
    event.nombre == (null || undefined) ||
    event.apellido_paterno == (null || undefined) ||
    event.apellido_materno == (null || undefined) ||
    event.correo == (null || undefined) ||
    event.edad == (null || undefined) ||
    event.telefono == (null || undefined) ||
    event.id_estado == (null || undefined) ||
    event.nick == (null || undefined) ||
    event.password == (null || undefined) ||
    event.id_rol == (null || undefined)
  ) {
    respuestaServicio(1, "error al ejecutar sp: faltan datos de usuario", null);
  } else {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(event.correo)) {
      respuestaServicio(1, "error en el correo: no es un formato valido", null);
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

      connection.query(
        "CALL CREAR_USUARIO('" +
          event.nombre +
          "','" +
          event.apellido_paterno +
          "','" +
          event.apellido_materno +
          "'," +
          medad +
          ",'" +
          micorreo +
          "','" +
          minick +
          "','" +
          pass +
          "','FOM_SERVICE'," +
          idrol +
          ",'" +
          token +
          "','" +
          url_avatar +
          "','" +
          event.descripcion_rol +
          "',1," +
          event.telefono.toString() +
          "," +
          event.id_estado +
          ",'" +
          eslatitud +
          "','" +
          eslongitud +
          "');",
        function(err2, rows) {
          if (err2) {
            console.log("error " + err2);
            respuestaServicio(1, "error al ejecutar sp: " + err2, null);
          } else {
            console.log(rows[0]);
            sendmail(micorreo, event.password.trim(), rows[0]);
          }
        }
      );
    }
  }
  function sendmail(micorreo, passw, rows) {
   

    /*
        ses.sendEmail({
            Source: from,
            Destination: { ToAddresses: to },
            Message: {
                Subject: {
                    Data: 'Bienvenido a rafagana2018'
                },
                Body: {
                    Html: {
                        Data: '<html><body style="background:#00a1e6"><div style="text-align:center">'+
                              '<img style="width: 10%;" src="http://ec2-34-214-249-230.us-west-2.compute.amazonaws.com/images/logo_rafa.png">'+
                              '</div><h3 style="color:white; text-align:center">Tu usuario de la app es: <br>' + micorreo + ' <br><br> Tu contraseña es: <br>' + passw + '<h3><br><br><br></body></html>'
                    },
                    Text: {
                        Data: 'Stop your messing around',
                    }
                }
            }
        }
            , function (err, data) {
                if (err) {
                    console.log("error al enviar correo: " + err)
                    respuestaServicio(0, "llamada correcta", rows)
                } else {
                    console.log('Email sent:');
                    respuestaServicio(0, "llamada correcta", rows)
                }
            }
        );*/

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rafagana2018@gmail.com",
        pass: "Afullsaas@900!"
      }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: "rafagana2018@gmail.com", // sender address
      to: micorreo, // list of receivers
      subject: "Bienvenido a rafagana2018", // Subject line
      text: "Stop your messing around", // plaintext body
      html:
        '<html><body style="background:#00a1e6"><div style="text-align:center">' +
        '<img style="width: 10%;" src="http://ec2-34-214-249-230.us-west-2.compute.amazonaws.com/images/logo_rafa.png">' +
        '</div><h3 style="color:white; text-align:center">Tu usuario de la app es: <br>' +
        micorreo +
        " <br><br> Tu contraseña es: <br>" +
        passw +
        "<h3><br><br><br></body></html>"
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err);
        respuestaServicio(0, "llamada correcta", rows);
      } else {
        console.log(info);
        respuestaServicio(0, "llamada correcta", rows);
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
