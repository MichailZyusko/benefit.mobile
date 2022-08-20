text="this is line one
this is line two
this is line three"
readarray -t arr <<< "$text"

echo "${arr[0]}"
echo "123123123"
echo "${arr[1]}"

export APP_VERSION=${arr[0]}
export COMMIT_MESSAGE=${arr[1]}
