#!/bin/bash

include keys/aws_key.mk
BASE_IMG_NAME := eweber.me/base
IMAGE_NAME := eweber.me/dev
CONTAINER_NAME := $(subst /,_,$(IMAGE_NAME))_container

USER_ID := $(shell id -u)
USER_GROUP := $(shell id -g -n)
GROUP_ID := $(shell id -g)
RUN_OPTIONS :=  -e HOME=/home/$(USER) \
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
								-p 8080:8080 \
								-w /home/$(USER)

DOCKER_RUN_CMD := docker run \
										-d \
										--name $(CONTAINER_NAME) \
										$(RUN_OPTIONS) \
										$(IMAGE_NAME)
DOCKER_RESTART_CMD := docker start $(CONTAINER_NAME)


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

# .PHONY docker_build docker_start docker_stop docker_rm docker_rmi

docker_build:
	docker build -t $(BASE_IMG_NAME) docker/base
	docker build -t $(IMAGE_NAME) docker/dev

docker_start:
	xhost + 127.0.0.1
	$(DOCKER_START_CMD)
	docker exec $(CONTAINER_NAME) bash /container_user_setup.sh
	docker exec -it --user $(USER) $(CONTAINER_NAME) bash

docker_stop:
	docker stop $(CONTAINER_NAME)
	xhost - 127.0.0.1
	osascript -e 'quit app "XQuartz"'

docker_rm:
	docker rm $(CONTAINER_NAME)

docker_rmi:
	docker rmi $(IMAGE_NAME)
	docker rmi $(BASE_IMG_NAME)
