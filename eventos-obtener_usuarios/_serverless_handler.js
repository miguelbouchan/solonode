
          var envVars = {
  "SERVERLESS_PROJECT": "eventos",
  "SERVERLESS_STAGE": "dev",
  "SERVERLESS_REGION": "us-west-2",
  "SERVERLESS_DATA_MODEL_STAGE": "dev",
  "MYSQL_HOST": "eventosinstance.c9uecppwlr7w.us-east-2.rds.amazonaws.com",
  "MYSQL_USER": "mbouchan",
  "MYSQL_PW": "eventos2017es3",
  "MYSQL_DB": "eventos"
};
          for (var key in envVars) {
            process.env[key] = envVars[key];
          }
          exports.handler = require("./handler")["handler"];
        