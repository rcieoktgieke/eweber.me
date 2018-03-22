#!/bin/bash

DEV := true
IMAGE_NAME := eweber.me/dev
CONTAINER_NAME := $(subst /,_,$(IMAGE_NAME))_container

DOCKER_DISPLAY_OPTIONS := -e DISPLAY=docker.for.mac.localhost:0

DOCKER_RUN_CMD := docker run \
									-d \
									--name $(CONTAINER_NAME) \
									$(DOCKER_DISPLAY_OPTIONS) \
									$(IMAGE_NAME)
DOCKER_RESTART_CMD := docker start $(CONTAINER_NAME)
DOCKER_EXEC_CMD := docker exec -it $(CONTAINER_NAME) bash

WAIT_FOR_RUNNING := while [[ ! $$(docker logs $(CONTAINER_NAME) | grep 'Entrypoint complete') ]]; do \
                      echo "Waiting for container to be ready"; \
                      sleep .1; \
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
	$(DOCKER_EXEC_CMD)

docker_stop:
	docker stop $(CONTAINER_NAME)
	xhost - 127.0.0.1
	osascript -e 'quit app "XQuartz"'

docker_rm:
	docker rm $(CONTAINER_NAME)
