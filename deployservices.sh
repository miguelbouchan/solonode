cd serverless-h1mpex

array=( cactividadprofesional )
for i in "${array[@]}"
do
    $i
    cd $i
    zip -r $i.zip .
    aws lambda update-function-code --function-name latasa-$i --zip-file fileb://$i.zip --publish
    lambda_publish="$(aws lambda publish-version --function-name 'arn:aws:lambda:us-east-1:944195423972:function:latasa-cactividadprofesional' --description '1' --region 'us-east-1')"
    echo $lambda_publish
    export PYTHONIOENCODING=utf8
    lambda_version="$(echo $lambda_publish | /usr/bin/python -c 'import sys, json; print json.load(sys.stdin)["Version"]')"
    echo $lambda_version
    aws lambda update-alias --function-name latasa-cactividadprofesional --name "dev" --function-version $lambda_version
    cd..
done