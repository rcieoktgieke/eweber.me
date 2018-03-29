#!/bin/bash
.RECIPEPREFIX +=

DEV := true
IMAGE_NAME := eweber.me/dev
CONTAINER_NAME := $(subst /,_,$(IMAGE_NAME))_container

ifeq ($(DEV), true)
  include keys/aws_key.mk
endif

USER_ID := $(shell id -u)
USER_GROUP := $(shell id -g -n)
GROUP_ID := $(shell id -g)
DEV_RUN_OPTIONS :=  -e HOME=/home/$(USER) \
                    -e DEV_USER=$(USER) \
                    -e DEV_USER_ID=$(USER_ID) \
                    -e DEV_USER_GROUP=$(USER_GROUP) \
                    -e DEV_GROUP_ID=$(GROUP_ID) \
                    -e DISPLAY=docker.for.mac.localhost:0 \
                    -e AWS_ACCESS_KEY_ID=$(AWS_ACCESS_KEY_ID) \
                    -e AWS_SECRET_ACCESS_KEY=$(AWS_SECRET_ACCESS_KEY) \
                    -e AWS_DEFAULT_REGION=us-west-1 \
                    -e AWS_DEFAULT_OUTPUT=json \
                    -v "$(shell pwd)":/home/$(USER)/eweber.me \
                    -v $(HOME)/.ssh:/home/$(USER)/.ssh \
                    -v $(HOME)/.gitconfig:/home/$(USER)/.gitconfig \
                    -p 8088:8080 \
                    -w /home/$(USER)

DOCKER_RUN_CMD := docker run \
                    -d \
                    --name $(CONTAINER_NAME) \
                    $(DEV_RUN_OPTIONS) \
                    $(IMAGE_NAME)
DOCKER_RESTART_CMD := docker start $(CONTAINER_NAME)

WAIT_FOR_RUNNING := while [[ ! $$(docker logs $(CONTAINER_NAME) | grep 'Entrypoint complete') ]]; do \
                      echo "Waiting for container to be ready"; \
                      sleep 2; \
                    done

ifndef CONTAINER_ID
  # container not running, restart if exited or start a new one
  CONTAINER_ID := $(shell docker ps -q -a --filter name=$(CONTAINER_NAME))
  ifdef CONTAINER_ID
    #container exists but is exited, restart it
    DOCKER_START_CMD := $(DOCKER_RESTART_CMD)
  else
    # container doesn't exist, start from scratch
    DOCKER_START_CMD := $(DOCKER_RUN_CMD)
  endif
endif


docker_build:
  docker build -t $(IMAGE_NAME) docker

docker_start:
  xhost + 127.0.0.1
  $(DOCKER_START_CMD)
  $(WAIT_FOR_RUNNING)
  docker exec -it --user $(USER) $(CONTAINER_NAME) bash

docker_stop:
  docker stop $(CONTAINER_NAME)
  xhost - 127.0.0.1
  osascript -e 'quit app "XQuartz"'

docker_rm:
  docker rm $(CONTAINER_NAME)
