# React Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), it's a simple demo purpose [Blocklet](https://www.arcblock.io/en/blocklets) that runs on [Blocklet Server](https://www.arcblock.io/en/platform).

## Run and debug in the cloud with Gitpod

Click the "Open in Gitpod" button, Gitpod will start Blocklet Server and the blocklet.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/blocklet/react-demo)

## Run and debug locally

If you have not installed Blocklet Server locally, you can do it using the following:

```shell
yarn global add @blocklet/cli
```

You can get more details from [Get started with Blocklet Server](https://www.arcblock.io/en/get-started) page or if you need help installing Blocklet Server.

Clone the repo and start development using a debug mode Blocklet Server instance inside this project:

```shell
git clone git@github.com:blocklet/react-demo.git
cd react-demo
yarn
blocklet server init --mode debug
blocklet server start
blocklet dev
```

## License

The code is licensed under the MIT license found in the
[LICENSE](LICENSE) file.
