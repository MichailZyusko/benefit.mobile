readarray -t arr <<< "${{ github.event.head_commit.message }}"

echo "${arr[0]}"
echo "${arr[1]}"

export APP_VERSION=$([ -n "${arr[0]}" ] && arr[0] || $github.ref)
export COMMIT_MESSAGE=$([ -n "${arr[1]}" ] && arr[1] || $github.event.head_commit.message)
