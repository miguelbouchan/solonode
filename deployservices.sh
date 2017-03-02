cd serverless-h1mpex
cd cactividadprofesional
zip -r cactividadprofesional.zip .
aws lambda update-function-code --function-name latasa-cactividadprofesional --zip-file fileb://cactividadprofesional.zip --publish
lambda_publish="$(aws lambda publish-version --function-name 'arn:aws:lambda:us-east-1:944195423972:function:latasa-cactividadprofesional' --description '1' --region 'us-east-1')"
export PYTHONIOENCODING=utf8
lambda_version="$(echo $lambda_publish | /usr/bin/python -c 'import sys, json; print json.load(sys.stdin)["Version"]')"
aws lambda update-alias --function-name latasa-cactividadprofesional --name "dev" --function-version $lambda_version