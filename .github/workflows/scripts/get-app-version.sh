readarray -t arr <<< "
v1.0.0

COMMIT_MESSAGE
"

echo ${arr[0]}
echo ${arr[1]}

export APP_VERSION=${arr[0]}
export COMMIT_MESSAGE=${arr[1]}
