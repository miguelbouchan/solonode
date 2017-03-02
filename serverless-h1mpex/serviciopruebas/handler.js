'use strict';
var oracledb = require('resuelvedb');

module.exports.handler = function (event, context, cb) {
	console.log("iniciando funcion de prueba")
	return cb(null, {
		err: 0,
		message: "mensaje de muestra mike",
		p_data: { datos: "no hay datos" }
	});
};
