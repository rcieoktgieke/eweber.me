FROM ubuntu:xenial
LABEL maintainer="Eric Weber eric@eweber.me"

USER root

RUN apt-get update
RUN apt-get install -y apt-transport-https
RUN apt-get install -y curl
RUN apt-get install -y sudo
RUN rm -rf /var/lib/apt/lists/*

# Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*
