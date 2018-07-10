#!/bin/bash

echo "Starting container with user: $DEV_USER, user id: $DEV_USER_ID, user group: $DEV_USER_GROUP, and group id: $DEV_GROUP_ID"

addgroup --gid "$DEV_GROUP_ID" "$DEV_USER_GROUP"
adduser --disabled-password \
	--gecos '' "$DEV_USER" \
	--uid "$DEV_USER_ID" \
	--gid "$DEV_GROUP_ID" 2>/dev/null
usermod -aG sudo "$DEV_USER"
echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
chown -R ${DEV_USER}:${DEV_USER_GROUP} "/home/${DEV_USER}"
cp /root/.bashrc /home/${DEV_USER}

echo "Adding ssh keys to agent"
eval "$(ssh-agent -s)"
find $HOME/.ssh -type f ! -name "*.*" ! -name "config" ! -name "*known_hosts" -exec ssh-add {} \;
