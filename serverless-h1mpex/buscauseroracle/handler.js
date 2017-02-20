'use strict';
var oracledb = require('resuelvedb');

module.exports.handler = function(event, context, cb) {
  var existente = 0;
  context.callbackWaitsForEmptyEventLoop = false;
  
  console.log(event.correo)
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ( !expr.test(event.correo) ){ 
	  console.log("error en el formato")
	  respcorreo(1,"error en el formato de correo",existente)
  }
  else{
	  console.log("buscando correo prestatario oracle")
	  var bindvars = {
	    "P_EMAIL": {
	      val: event.correo,
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_IN"
	    },
	    "P_ROL" : {
	        val: 1,
	        "type": "oracledb.NUMBER",
	        "dir": "oracledb.BIND_IN"
	          },
	    "P_EXISTE": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_NO": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_MSG": {
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_OUT"
	    }
	  };
	
	  var sql = "BEGIN SCH_LATASA.EMAIL_CHECK_S(:P_EMAIL,:P_ROL, :P_EXISTE, :P_ERR_NO, :P_ERR_MSG); END;";
	  oracledb.execute(sql, bindvars, function(err, result) {
	    if (err) {
	      console.log("error" + err)
	      respcorreo(1,"error en la base - "+err,existente)
	    } 
	    else {
	      console.log("existe oracle : "+result.outBinds.P_EXISTE)
	      existente = result.outBinds.P_EXISTE;
	      if(result.outBinds.P_EXISTE==1 || result.outBinds.P_EXISTE==true){
	    	 respcorreo(0,"",1) 
	      }
	      else{
	    	 validaOraclelowerCase();
	      }
	    }
	
	  });
  }
  
  function validaOraclelowerCase(){
	  console.log("buscando correo prestatario oracle lowercase")
	  var bindvars = {
	    "P_EMAIL": {
	      val: event.correo.toLowerCase(),
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_IN"
	    },
	    "P_ROL" : {
	        val: 1,
	        "type": "oracledb.NUMBER",
	        "dir": "oracledb.BIND_IN"
	          },
	    "P_EXISTE": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_NO": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_MSG": {
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_OUT"
	    }
	  };
	
	  var sql = "BEGIN SCH_LATASA.EMAIL_CHECK_S(:P_EMAIL,:P_ROL, :P_EXISTE, :P_ERR_NO, :P_ERR_MSG); END;";
	  oracledb.execute(sql, bindvars, function(err, result) {
	    if (err) {
	      console.log("error" + err)
	      respcorreo(1,"error en la base - "+err,existente)
	    } 
	    else {
	      console.log("existe oracle : "+result.outBinds.P_EXISTE)
	      existente = result.outBinds.P_EXISTE;
	      if(result.outBinds.P_EXISTE==1 || result.outBinds.P_EXISTE==true){
	    	  respcorreo(0,"",1) 
	      }
	      else{
		      var params = {
	              TableName: "prestatario",
			      KeyConditionExpression: "correo = :corr",
			      FilterExpression: 'perfil.correo = :corr',
			      ExpressionAttributeValues: {
			        ':corr': event.correo
			      }
	          };
		      console.log("buscando correo dynamo prestatario")
		      dynamo.query(params, function(err, data) {
		    	  console.log(data)
		        if (err) {
		          console.error("Unable to read item. Error JSON:", JSON.stringify(err,null, 2));
		          respcorreo(1,"error en la base d",existente)
		        } 
		        else {
		        	console.log(parseInt(data.Count))
		          if (parseInt(data.Count) > 0) {
		            existente = 1;
		            
		          }
		          if(existente==1){
		        	  respcorreo(0,"",1) 
		          }
		          else{
		        	  verificaLowerCase(event, existente);
		          }
		        } 
		      });
	      }
	    }
	
	  });
	  
  }
  
  function verificaLowerCase(event, existente){
	  console.log("buscando correo: "+event.correo.toLowerCase())
	  var params = {
         TableName: "prestatario",
         KeyConditionExpression: "correo = :corr",
         FilterExpression: 'perfil.correo = :corr',
         ExpressionAttributeValues: {
           ':corr': event.correo.toLowerCase()
         }
	  };
      console.log("buscando correo dynamo prestatario lower case")
      dynamo.query(params, function(err, data) {
        console.log(data)
    	if (err) {
          console.error("Unable to read item. Error JSON:", JSON.stringify(err,null, 2));
          respcorreo(1,"error en la base d",existente)
        } 
        else {
          if (parseInt(data.Count) > 0) {
            existente = 1;
            respcorreo(0,"",existente)
          }
          else{
        	verificaCorreoInversionista();
          } 
        } 
        
      });	  
  }
  
  function verificaCorreoInversionista(){
	  console.log("buscando correo inversionista oracledb")
	  var bindvars = {
	    "P_EMAIL": {
	      val: event.correo.toLowerCase(),
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_IN"
	    },
	    "P_ROL" : {
	        val: 4,
	        "type": "oracledb.NUMBER",
	        "dir": "oracledb.BIND_IN"
	          },
	    "P_EXISTE": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_NO": {
	      "type": "oracledb.NUMBER",
	      "dir": "oracledb.BIND_OUT"
	    },
	    "P_ERR_MSG": {
	      "type": "oracledb.VARCHAR2",
	      "dir": "oracledb.BIND_OUT"
	    }
	  };
	
	  var sql = "BEGIN SCH_LATASA.EMAIL_CHECK_S(:P_EMAIL,:P_ROL, :P_EXISTE, :P_ERR_NO, :P_ERR_MSG); END;";
	  oracledb.execute(sql, bindvars, function(err, result) {
	    if (err) {
	      console.log("error" + err)
	      respcorreo(1,"error en la base - "+err,existente)
	    } 
	    else {
	      console.log("existe oracle : "+result.outBinds.P_EXISTE)
	 
	      existente = result.outBinds.P_EXISTE;
	      
	      if(result.outBinds.P_EXISTE==1 || result.outBinds.P_EXISTE==true){
	    	 respcorreo(0,"",1) 
	      }
	      else{
	    	 respcorreo(0,"",existente)
	      }
	    }
	  });
  }
  
  function respcorreo(error,mess,exist){
	  return cb(null, {
	      err:error,
	      message:mess,      
	      p_data: {
	        "existe": exist,
	      }
	  });
  }
};
