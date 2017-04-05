
          var envVars = {
  "SERVERLESS_STAGE": "dev",
  "ORCL_USER": "LATASAUSER",
  "SERVERLESS_DATA_MODEL_STAGE": "dev"
};
          for (var key in envVars) {
            process.env[key] = envVars[key];
          }
          exports.handler = require("./test")["lambdaLocal"];
        
