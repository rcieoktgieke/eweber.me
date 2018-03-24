FROM ubuntu:xenial
LABEL maintainer="Eric Weber eric@eweber.me"

USER root

RUN apt-get update
RUN apt-get install -y apt-transport-https
RUN apt-get install -y curl
RUN apt-get install -y git-all
RUN apt-get install -y sudo
RUN apt-get install -y terminator
RUN apt-get install -y vim
RUN rm -rf /var/lib/apt/lists/*

# Install VS Code
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && \
    sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list' && \
    apt-get update && \
    apt-get -y install code && \
    rm -rf /var/lib/apt/lists/*

# Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set up entrypoint
COPY ./artifacts/* /
ENTRYPOINT [ "/entrypoint.sh" ]
