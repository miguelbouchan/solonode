DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
declare -A servicio0=([nombre]='cactividadprofesional' [direccion]='serverless-h1mpex/cactividadprofesional/') 
for id_service in ${!servicio@}; 
do
    if $doDeploy ; then
        declare -n servicio=$id_service
        cd ${servicio[direccion]}
        zip -r ${servicio[nombre]}.zip .
        echo "deploy lambda named ${servicio[nombre]}"
        aws lambda update-function-code --function-name latasa-${servicio[nombre]} --zip-file fileb://${servicio[nombre]}.zip --publish
        lambdaaws="arn:aws:lambda:us-east-1:944195423972:function:latasa-"${servicio[nombre]}
        lambda_publish="$(aws lambda publish-version --function-name $lambdaaws --description '1' --region 'us-east-1')"
        export PYTHONIOENCODING=utf8
        lambda_version="$(echo $lambda_publish | /usr/bin/python -c 'import sys, json; print json.load(sys.stdin)["Version"]')"
        aws lambda update-alias --function-name latasa-${servicio[nombre]} --name "dev" --function-version $lambda_version
        cd $DIR
    else
        echo "change value doDeploy to deploy service ${servicio[nombre]}"
    fi
done






































