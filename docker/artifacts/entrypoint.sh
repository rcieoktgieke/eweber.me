#!/bin/bash

echo "Setting up user"
# /container_user_setup.sh

echo "Adding ssh keys to agent"
eval "$(ssh-agent -s)"
find $HOME/.ssh -type f ! -name "*.*" ! -name "config" ! -name "*known_hosts" -exec ssh-add {} \;

echo "Entrypoint complete -- sleeping container entry process infinitly"
sleep infinity
