readarray -t arr <<< "$github.event.head_commit.message"

echo "${arr[0]}"
echo "${arr[1]}"

export APP_VERSION=${arr[0] || $github.ref}
export COMMIT_MESSAGE=${arr[1] || $github.event.head_commit.message}
