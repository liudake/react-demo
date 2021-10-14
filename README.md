# React Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), it's a simple demo purpose [Blocklet](https://www.arcblock.io/en/blocklets) that runs on [ABT Node](https://www.arcblock.io/en/platform).

## Install on my ABT Node

[![Install on my ABT Node](https://raw.githubusercontent.com/blocklet/development-guide/main/assets/install_on_abtnode.svg)](https://install.arcblock.io/?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Freact-demo%2Freleases%2Fdownload%2Fv0.1.15%2Fblocklet.json)

## Run and debug in the cloud with Gitpod

Click the "Open in Gitpod" button, Gitpod will start ABT Node and the blocklet.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/blocklet/react-demo)

## Run and debug locally

If you have not installed ABT Node locally, you can do it using the following:

```shell
yarn global add @abtnode/cli
```

You can get more details from [Get started with ABT Node](https://www.arcblock.io/en/get-started) page or if you need help installing ABT Node.

Clone the repo and start development using a debug mode ABT Node instance inside this project:

```shell
git clone git@github.com:blocklet/react-demo.git
cd react-demo
yarn
abtnode init --mode debug
abtnode start
blocklet dev
```

## License

The code is licensed under the MIT license found in the
[LICENSE](LICENSE) file.
