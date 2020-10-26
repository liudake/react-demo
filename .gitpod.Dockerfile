FROM gitpod/workspace-full

RUN brew install nginx && \
  echo PATH=/home/linuxbrew/.linuxbrew/bin:$PATH >> ~/.bashrc && \
  npm install -g lerna @abtnode/cli && \
  echo "export ABT_NODE_TEST_DOCKER=1" >> ~/.bashrc