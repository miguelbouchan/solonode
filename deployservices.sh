cd serverless-h1mpex
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "dir is : "$DIR
array=( cactividadprofesional serviciopruebas )
for i in "${array[@]}"
do
    cd $i
    zip -r $i.zip .
    echo "deploy lambda named $i"
    aws lambda update-function-code --function-name latasa-$i --zip-file fileb://$i.zip --publish
    lambdaaws="arn:aws:lambda:us-east-1:944195423972:function:latasa-"$i
    lambda_publish="$(aws lambda publish-version --function-name $lambdaaws --description '1' --region 'us-east-1')"
    export PYTHONIOENCODING=utf8
    lambda_version="$(echo $lambda_publish | /usr/bin/python -c 'import sys, json; print json.load(sys.stdin)["Version"]')"
    aws lambda update-alias --function-name latasa-$i --name "dev" --function-version $lambda_version
    cd -
done