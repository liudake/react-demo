FROM mcr.microsoft.com/vscode/devcontainers/universal:linux

USER root

# install nginx
RUN apt-get install nginx -yy && \
    setcap CAP_NET_BIND_SERVICE=+eip /usr/sbin/nginx

USER codespace

ENV PATH="/home/codespace/.npm-global/bin:${PATH}"

RUN npm install -g @abtnode/cli@latest
