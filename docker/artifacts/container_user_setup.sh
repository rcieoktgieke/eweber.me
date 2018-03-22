#!/bin/bash

echo "Starting container with user: $DEV_USER, user id: $DEV_USER_ID, user group: $DEV_USER_GROUP, group id: $DEV_GROUP_ID, and docker group id: $DOCKER_GROUP_ID"

addgroup --gid "$DEV_GROUP_ID" "$DEV_USER_GROUP"
addgroup --gid "$DOCKER_GROUP_ID" "docker"
adduser --disabled-password \
  --gecos '' "$DEV_USER" \
  --uid "$DEV_USER_ID" \
  --gid "$DEV_GROUP_ID" 2>/dev/null
usermod -aG sudo "$DEV_USER"
usermod -aG docker "$DEV_USER"
echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
chown -R ${DEV_USER}:${DEV_USER_GROUP} "/home/${DEV_USER}"
cp /root/.bashrc /home/${DEV_USER}
