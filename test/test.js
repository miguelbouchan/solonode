
var expect = require('chai').expect;
const lambdaLocal = require('lambda-local');
var path = require("path");
var async = require('async');
var error = [];
var complete = [];
var jsonuser = {
	"fecha": "2017-02-14",
	"fechaF": "2017-03-22"
};
var event2 = {};

var func = [
	["getinvestor", jsonuser, 'serverless-h1mpex/getinvestor/post/handler.js']];

async.each(func, function (item, callback) {
	describe('test to use in serverless', function () {
		it('should pass if the answer is 0 in the service ' + item[0], function () {
			lambdaLocal.execute({
				event: item[1],
				lambdaPath: path.join(item[2]),
				profileName: 'default',
				timeoutMs: 20000,
				callback: function (err, data) {
					if (err) {
						console.log(err);
						error.push({ "funcion_incorrecta": "nombre de la funcion: " + item[0] + "----ubicacion ed la funcion: " + item[2] });
						callback(true)
					} else {
						var respuesta = data.err
						expect(respuesta).to.equal(0);
						if (data.err == 0) {
							complete.push({ "funcion_correcta": "nombre de la funcion: " + item[0] + "----ubicacion ed la funcion: " + item[2] });
						}
						else {
							error.push({ "funcion_incorrecta": "nombre de la funcion: " + item[0] + "----ubicacion ed la funcion: " + item[2] });
						}
						callback(null)
					}
				}
			});
		});
	});
}, function (err, data) {
	if (err) {
		console.log("error al ejecutar: " + err)
	}
	else {
		console.log("--------------------------resultados de las funciones--------------------------------")
		console.log("funciones con error:");
		for (var i = 0; i < error.length; i++) {
			console.log(error[i].funcion_incorrecta);
		}
		console.log("funciones trabajando correctamente:")
		for (var i = 0; i < complete.length; i++) {
			console.log(complete[i].funcion_correcta);
		}
		var resultado = 0;
		if (complete.length != undefined) { resultado = complete.length }
		if (error.length != undefined) { resultado = resultado + error.length }
		console.log("total de funciones verificadas: " + resultado)
		describe('test to use in serverless sec', function () {
			it('should pass if all the process has finished ', function () {
				expect(true).to.equal(true);
			});
		});

	}
});