
          var envVars = {
  "SERVERLESS_PROJECT": "${serverless_project}",
  "SERVERLESS_STAGE": "${serverless_stage}",
  "SERVERLESS_REGION": "us-east-1",
  "SERVERLESS_DATA_MODEL_STAGE": "dev"
};
          for (var key in envVars) {
            process.env[key] = envVars[key];
          }
          exports.handler = require("./handler")["handler"];
        
