
var expect = require('chai').expect;
const lambdaLocal = require('lambda-local');
var path = require("path");
var async = require('async');
var error = [];
var complete = [];
var jsonuser = { "nombre": "mike" }

var func = [["buscauseroracle", jsonuser, 'serverless-h1mpex/buscauseroracle/handler.js']];


console.log("ubicacion de raiz" + func[0][2])
describe('test to use in serverless', function () {
	it('should pass if the answer is nacho', function () {

		async.each(func, function (item, callback) {
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
						console.log("****************************")
						console.log(data)
						var nombre=data.nombre
						console.log("****************************")
						expect(nombre).to.equal("mike");
						console.log("****************************")
						if (data.nombre == "mike") {
							complete.push({ "funcion_correcta": "nombre de la funcion: " + item[0] + "----ubicacion ed la funcion: " + item[2] });
						}
						else {
							error.push({ "funcion_incorrecta": "nombre de la funcion: " + item[0] + "----ubicacion ed la funcion: " + item[2] });
						}
						callback(null)
					}
				}
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
				console.log("-------------------------------------------------------------------------------------")
				console.log("funciones trabajando correctamente:")
				for (var i = 0; i < complete.length; i++) {
					console.log(complete[i].funcion_correcta);
				}
				var resultado = 0;
				console.log("-------------------------------------------------------------------------------------")
				if (complete.length != undefined) { resultado = complete.length }
				if (error.length != undefined) { resultado = resultado + error.length }
				console.log("total de funciones verificadas: " + resultado)
			}
		});



		

	});
});