'use strict';
var oracledb = require('resuelvedb');


/**
 * getInvestor
 * @module getInvestor
 * @requires resuelvedb
 * @param {string} fecha Fecha de inicio para búsqueda en la base de datos.
 * @param {string} fechaF Fecha final para búsqueda en la base de datos.
 * @return InversionistasInfoGeneral
 * @example variables de entada: {"fecha":"2017-02-20", "fechaF":"2017-03-02"}
 * @example variables de salida: 
        {
		"err": 0,
		"message": "Datos obtenidos correctamente",
		"p_data": {
			"creaCuenta": creaCuenta,
			"datosPersonales": datosPersonales,
			"domicilio": domicilio,
			"usuariosTerminados": usuariosTerminados,
			"usuariosTerminadosMoral": usuariosTerminadosMoral
		}
	}
 * @description Módulo que obtiene la información de los inversionistas desde oracle
 * y los guarda en un objeto.
 */
module.exports.handler = function (event, context, cb) {
	console.log("Iniciando búsqueda de inversionistas")
	var d = new Date(event.fecha).toISOString().slice(0, 10);
	if (event.fechaF) {
		var d2 = new Date(event.fechaF).toISOString().slice(0, 10);
	}
	else {
		var d2 = d
	}
	var varSP = {
		"P_FECHA_I": {
			"type": "oracledb.DATE",
			"dir": "oracledb.BIND_IN",
			val: d
		},
		"P_FECHA_F": {
			"type": "oracledb.DATE",
			"dir": "oracledb.BIND_IN",
			val: d2
		},
		"C_LISTA": {
			"type": "oracledb.CURSOR",
			"dir": "oracledb.BIND_OUT",
		},
		"P_ERR_NO": {
			"type": "oracledb.NUMBER",
			"dir": "oracledb.BIND_OUT",
		},
		"P_ERR_MSG": {
			"type": "oracledb.STRING",
			"dir": "oracledb.BIND_OUT",
		}
	}

	var sql = "BEGIN MDM.GET_ALL_INFO_INVEST(" +
		"P_FECHA_I => :P_FECHA_I," +
		"P_FECHA_F => :P_FECHA_F," +
		"C_LISTA => :C_LISTA," +
		"P_ERR_NO => :P_ERR_NO," +
		"P_ERR_MSG => :P_ERR_MSG); END;";

	/**
	 * @function oracledb
	 * @param {string} sql Sentencia para ejecutar el store MDM.GET_ALL_INFO_INVEST. 
	 * @param {object} vasSql Datos a enviar en el SP.
	 * @returns result
	 * @description Función que ejecuta el módulo Oracle para obtener la información 
	 * requerida, ordenarla y guardarla en objetos json. 
	 */
	oracledb.execute(sql, varSP, function (err, result) {
		if (err) {
			return cb(null, {
				err: 1,
				message: "Error inesperado en base de datoos..." + err
			});
		}
		else {
			if (result.outBinds.P_ERR_NO == null) {
				var granLista = [];
				if (result.rows.length > 0) {
					var new_id = result.rows[0][0];
					var bandera = 0;
					var tamano = result.rows.length - 1;
					var listausuarios = [];
					for (var i = 0; i < result.rows.length; i++) {
						if (new_id == result.rows[i][0]) {
							listausuarios.push(result.rows[i])
						}
						else if (new_id != result.rows[i][0]) {
							granLista.push(listausuarios);
							listausuarios = [];
							new_id = result.rows[i][0];
							listausuarios.push(result.rows[i])
						}
					}
					granLista.push(listausuarios);
					var newJson = [];
					var creaCuentaC = [];
					var datosPersonalesC = [];
					var domicilioC = [];
					var usuariosTerminados = [];
					var usuariosTerminadosMoral = [];
					for (var i = 0; i < granLista.length; i++) {
						console.log(granLista[i][0].length)
						console.log(granLista[i][0])
						newJson = [];
						var pantalla = granLista[i][0][37]
						var nombres = separaNombres(granLista[i][0][2]);
						var primerNombre;
						for (var k = 0; k < nombres.length; k++) {
							if (k == 0) {
								primerNombre = nombres[k];
							}
							if (k >= 1 && k < nombres.length - 2) {
								primerNombre = primerNombre + " " + nombres[k];
							}
						}
						var tNombre = nombres.length;
						var apaterno = nombres[tNombre - 2];
						var amaterno = nombres[tNombre - 1]

						newJson.simulador = {
							"montoMensual": granLista[i][0][8],
							"rendimiento": granLista[i][0][9],
							"totalInversion": granLista[i][0][10],
							"anios": granLista[i][0][6],
							"montoInicial": granLista[i][0][7]
						}

						newJson.cuenta = {
							"apaterno": apaterno,
							"correo": granLista[i][0][4],
							"tipo_persona": granLista[i][0][3],
							"amaterno": amaterno,
							"nombre": primerNombre,
							"username": granLista[i][0][5],
							"celular": granLista[i][0][11],
							"gid": granLista[i][0][45],
							"numPagina": pantalla
						}
						newJson.solicitud = {
							"pantalla": pantalla
						}

						if (pantalla >= 3 && pantalla < 6) {
							var fecha = (granLista[i][0][16].split("T"));
							var personaexpuesta = true;
							if (granLista[i][0][20] == 0) {
								personaexpuesta = false;
							}
							var sfecha = fecha[0].split("-")
							var newFecha = sfecha[0] + "/" + sfecha[1] + "/" + sfecha[2]

							if (granLista[i][0][22] != null && granLista[i][0][22] != undefined) {
								granLista[i][0][22] = (granLista[i][0][22]).toString()
							}
							if (granLista[i][0][14] != null && granLista[i][0][14] != undefined) {
								granLista[i][0][14] = (granLista[i][0][14]).toString()
							}
							if (granLista[i][0][15] != null && granLista[i][0][15] != undefined) {
								granLista[i][0][15] = (granLista[i][0][15]).toString()
							}

							newJson.datospersonales = {
								"actividad_profesional": (granLista[i][0][12]).toString(),
								"cargo_politico": granLista[i][0][13],
								"curp": granLista[i][0][14],
								"estado_nacimiento": granLista[i][0][15],
								"fecha_nacimiento": newFecha,
								"genero": (granLista[i][0][17]).toString(),
								"nacionalidad": (granLista[i][0][18]).toString(),
								"pais_nacimiento": (granLista[i][0][19]).toString().trim(),
								"persona_politicamente_expuesta": granLista[i][0][20],
								"procedencia_recursos": (granLista[i][0][21]).toString(),
								"rfc": granLista[i][0][22],
								"saldo_promedio": (granLista[i][0][23]).toString()
							}
						}
						else {
							newJson.datospersonales == null
						}
						if (pantalla >= 4 && pantalla < 6) {
							var imagenes = [];
							if (granLista[i][0][33] != null) {
								if (granLista[i][0][34] != null) {
									imagenes.push({
										"description": "frente",
										"url": granLista[i][0][33]
									});
								}
								else {
									imagenes.push({
										"description": "identificacion",
										"url": granLista[i][0][33]
									});
								}
							}
							if (granLista[i][0][34] != null) {
								imagenes.push({
									"description": "reverso",
									"url": granLista[i][0][34]
								});
							}
							if (granLista[i][0][35] != null) {
								imagenes.push({
									"description": "pasaporte",
									"url": granLista[i][0][35]
								});
							}
							if (granLista[i][0][36] != null) {
								imagenes.push({
									"description": "Selfie",
									"url": granLista[i][0][36]
								});
							}
							if (granLista[i][0][24] != undefined && granLista[i][0][24] != null) {
								granLista[i][0][24] = (granLista[i][0][24]).toString()
							}

							if (granLista[i][0][28] != undefined && granLista[i][0][28] != null) {
								granLista[i][0][28] = (granLista[i][0][28]).toString()
							}
							if (granLista[i][0][29] != undefined && granLista[i][0][29] != null) {
								granLista[i][0][29] = (granLista[i][0][29]).toString()
							}
							newJson.domicilio = {
								"calle": granLista[i][0][24],
								"ciudad": granLista[i][0][25],
								"codigo_postal": (granLista[i][0][32]).toString(),
								"colonia": (granLista[i][0][26]).toString(),
								"delegacion_municipio": (granLista[i][0][30]).toString(),
								"ife_como_comprobante": granLista[i][0][31],
								"files": imagenes,
								"estado": (granLista[i][0][27]).toString(),
								"numeroext": granLista[i][0][28],
								"numeroint": granLista[i][0][29]
							};
						}
						else {
							newJson.domicilio = null;
						}

						var beneficiarios = [];
						console.log("granLista[i].length: " + granLista[i].length)
						for (var j = 0; j < granLista[i].length; j++) {
							var npantalla = granLista[i][j][37]
							if (npantalla == 5) {
								var fecha = (granLista[i][j][42].split("T"));
								var sfecha = fecha[0].split("-")
								var nuevafecha = sfecha[0] + "/" + sfecha[1] + "/" + sfecha[2]
								beneficiarios.push({
									"apaterno": granLista[i][j][39],
									"parentesco": granLista[i][j][41],
									"fecha_nacimiento": nuevafecha,
									"porcentaje_beneficio": (granLista[i][j][43]).toString(),
									"id": (granLista[i][j][44]).toString(),
									"amaterno": granLista[i][j][40],
									"selected": true,
									"nombres": granLista[i][j][38]
								});
							}
						}
						if (pantalla == 5) {
							newJson.datosBeneficiario = {
								"beneficiarios": beneficiarios
							}
						} else {
							newJson.datosBeneficiario = null;
						}
						var fecha_registro = granLista[i][0][1];
						var fecha = (fecha_registro.split("T"));
						var sfecha = fecha[0].split("-")
						fecha_registro = sfecha[0] + "-" + sfecha[1] + "-" + sfecha[2]


						if (pantalla == 2) {
							creaCuentaC.push({
								fecha_registro: fecha_registro,
								cuenta: newJson.cuenta,
								simulador: newJson.simulador
							});
						}
						if (pantalla == 3) {
							datosPersonalesC.push({
								fecha_registro: fecha_registro,
								cuenta: newJson.cuenta,
								simulador: newJson.simulador,
								datosPersonales: newJson.datospersonales
							});
						}
						if (pantalla == 4) {
							domicilioC.push({
								fecha_registro: fecha_registro,
								cuenta: newJson.cuenta,
								simulador: newJson.simulador,
								datosPersonales: newJson.datospersonales,
								domicilio: newJson.domicilio
							});
						}
						if (pantalla == 5) {
							usuariosTerminados.push({
								fecha_registro: fecha_registro,
								cuenta: newJson.cuenta,
								simulador: newJson.simulador,
								datosPersonales: newJson.datospersonales,
								domicilio: newJson.domicilio,
								beneficiarios: newJson.datosBeneficiario
							});
						}
						if (pantalla == 6) {
							usuariosTerminadosMoral.push({
								fecha_registro: fecha_registro,
								cuenta: newJson.cuenta,
								simulador: newJson.simulador
							});
						}
					}
					return cb(null, {
						err: 0,
						message: "",
						p_data: {
							"creaCuenta": creaCuentaC,
							"datosPersonales": datosPersonalesC,
							"domicilio": domicilioC,
							"usuariosTerminados": usuariosTerminados,
							"usuariosTerminadosMoral": usuariosTerminadosMoral,
							"cambio_nuevo":"true",
							"otro":"false"
						}
					});
				}
				else {
					return cb(null, {
						err: 0,
						message: "",
						p_data: {
							"creaCuenta": [],
							"datosPersonales": [],
							"domicilio": [],
							"usuariosTerminados": [],
							"usuariosTerminadosMoral": [],
							"cambio_nuevo":"true",
							"otro":"false"
						}
					});
				}
			}
			else {
				return cb(null, {
					err: 1,
					message: "error en la base o" + result.outBinds.P_ERR_MSG
				});
			}
		}
	});

	/**
	 * @function separaNombres
	 * @param {string} nombre Nombre del usuario. 
	 * @returns arrayObt
	 * @description Función que separa el primer y segundo nombre de un string a un arreglo.
	 */
	function separaNombres(nombre) {
		var arrayObt;
		var separador = " ";
		var limite = 6;
		if (nombre != null) {
			arrayObt = nombre.split(separador, limite);
		}
		return arrayObt;
	}
};
