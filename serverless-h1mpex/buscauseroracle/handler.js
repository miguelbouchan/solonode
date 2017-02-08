'use strict';

module.exports.handler = function(event, context, cb) {
  console.log("viene de event: "+event.nombre)
  return cb(null, {
    nombre: "nacho"
  });
};
