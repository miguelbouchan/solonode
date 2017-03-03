git diff --staged --name-only > changes.txt
echo "change file to deploy modified services"
node getResult.js