FROM ubuntu:xenial
LABEL maintainer="Eric Weber eric@eweber.me"

USER root

RUN apt-get update
RUN apt-get install -y terminator
RUN apt-get install -y vim
RUN rm -rf /var/lib/apt/lists/*

# Set up entrypoint
COPY ./artifacts/* /
ENTRYPOINT [ "/entrypoint.sh" ]
