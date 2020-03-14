# shopify-monitor

Free shopify monitor! Updates you on the latest restocks from your favourite brands!

### Installation

Before beginning, make sure you have installed [Node.js](http://nodejs.org/), npm (comes with Node.js) & [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

You must also make sure that you have `yarn` <= 1.23 installed, too. Yarn can be obtained by running

```bash
npm i -g yarn@1.23.0
```

This command may require `sudo` on a \*nix based machine.

Installing the monitor is easy. Simply run the commands below in a terminal.

```
git clone https://github.com/aabbccsmith/shopify-monitor
cd shopify-monitor
yarn install
yarn build
```

You will only have to run these commands once.

### Starting the monitor

Just like installing, running is also super simple. All you have to do is

```
yarn start
```

and this will start based off of your files made when you ran `yarn build`. If you edit some code, you will have to run `yarn build` again before you can run `yarn start`.

### Contributing

This project was intended to be maintained by the Sneaker community, so, naturally, we would LOVE you to contribute!

Follow our basic guidelines below to make the process quick and easy

#### Branch Structure

1. Firstly, fork the repo (or make sure you are on `master` and you have ran `git pull` to ensure you are up to date).
2. Edit your code
3. Submit a pull request
4. Wait for it to be reviewed & accepted
5. Congrats! You just contributed to open source software and you will be helping many people out. Feel good about yourself, because today will be a good day!!

### Developer goodies

- Hot reload on the client AND server in development
- Webpack bundling + react for frontend
- ESNext support globally
