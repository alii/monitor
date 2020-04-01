# shopify-monitor

###### To make the most out of shopify-monitor, we ask that you read the entire readme file before asking any questions in the support discord server

Free shopify monitor! Updates you on the latest restocks from your favourite brands!

### Installation

Before beginning, make sure you have installed [Node.js](http://nodejs.org/), npm (comes with Node.js) & [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

You must also make sure that you have `yarn` <= 1.23 installed, too. Yarn can be obtained by running

```bash
npm i -g yarn@1.22.4
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

Next, you'll have to copy `.env-template` to a new file in the same folder and call it `.env`. You can now configure the application to your hearts content!

### Theming

Want to theme shopify-monitor? Easy! Simply navigate to `/styles/theme.scss` and edit the values accordingly. After you have changed them, you must then run `yarn build` and then `yarn start`. Make sure that you do not remove and values, just edit them.

We have added a dark/light theme built in. All you must to is navigate to `/style/theme.scss`, and change the line below...

```scss
$dark-mode: false; // Change this to `true` to enable dark mode
```

... to read `$dark-mode: true;`. Afterwards, build the application (`yarn build`) and start it right back up!

### Starting the monitor

Just like installing, running is also super simple. All you have to do is

```
yarn start
```

and this will start based off of your files made when you ran `yarn build`. If you edit some code, you will have to run `yarn build` again before you can run `yarn start`.

If you don't want to have to run `yarn build` before starting, there is a script called `bart` which will **b**uild and st**art** in the one command. Useful for testing. This can be ran by performing `yarn bart`.

### Contributing

This project was intended to be maintained by the Sneaker community, so, naturally, we would LOVE you to contribute!

Follow our basic guidelines below to make the process quick and easy

#### Structure

1. Firstly, fork the repo (or make sure you are on `master` and you have ran `git pull` to ensure you are up to date).
2. Edit your code
3. Submit a pull request
4. Wait for it to be reviewed & accepted
5. Congrats! You just contributed to open source software and you will be helping many people out. Feel good about yourself, because today will be a good day!!

### Developer goodies

- Hot reload on the client AND server in development
- Webpack bundling + react for frontend
- ESNext support globally
- Husky and prettier for pre-commit hooks to ensure a clean code style
- ESLint

### Scripts

shopify-monitor comes with eight scripts, where five are to be used. They are:

- `start`: Starts the main server from `./dist/index.js` (will not work unless `yarn build` or `yarn bart` has been ran before).
- `bart`: Builds and starts. Useful for testing. This is equivalent to running `yarn build` and then `yarn start` in succession.
- `start-dev`: Starts the application in development mode. This will run the webpack-dev-server (for the hot-reloaded frontend) and will also start the backend API server.
- `format`: Runs prettier on the entire project. Useful when you want to clean all the code.
- `build`: Compiles the frontend and backend, spitting the output into `dist/`.

#### Internal scripts

##### Warning: Don't run these scripts! They are here for reference only.

- `build-react`: Compiles the frontend (`client/`) into one production ready, minified file.
- `watch-server`: Starts `babel-watch` on the server (hot reloading for the backend).
- `build-server`: Runs babel on the backend and the output goes to `dist/` ready for `yarn start`.

### What happens during development?

In development, two servers will run. You have the webpack-dev-server running the **development** React app (with hot reload) on :3001, and the express API server running on :3000

During development, the express server on 3000 will only accept requests to `/api/`, whereas in production, it will accept all requests.

### What about in production?

In production, :3001 will not run, as it is a dev server only. The React frontend will be built and **minified** (available under `dist/`) and the express server will allow all traffic routing it to the compiled React app, or to the API endpoint.

## Important: For developers

#### Branch Structure

We really appreciate your support working on this project, and so to help maintain a clean project, we ask that you follow a strict branch structure. Per feature, checkout from `origin/master` and call the branch: `your-discord-username/short-description-of-feature`. This will ensure readability and scaling should we need to contact you about any changes.

#### JSDOC

Where possible, JSDoc[ing] of the code is very much appreciated. It enables other developers to make sense of code written not just by themselves at 3am, but also other developers on the team. An example JSDoc for a function can be found below as part of the Route strucute.

#### Routes

shopify-monitor's backend was built upon a rigid routing system. It's easy to create and register routes! To add a route, go to `server/routes` and make or use a folder that would be appropriate for the route.

For example, we are going to make a "getCoffeeMade" route. I would go to server/routes/`, make a folder like "dev-stats" and then make a new file underneath that called`GetCoffeeMade.js`.

After, I write my Routes. A standard route looks something like this:

```js
import { Route, RouteTypes } from '../util'; // Import the RouteTypes (get or post, effectively) and the basic Route class

class GetCoffeeMade extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getSites'); // Set the Route's type and path
  }

  /**
   * Handler for GetCoffeeMade
   * @param {import("express").Request} req The standard request object
   * @param {import("express").Response} res The standard response object
   */
  async handle(req, res) {
    // This function *can* be async!
    res.json({ error: false, message: 'Successfully got coffee made', data: '400 Cups' });
  }
}

export default GetCoffeeMade;
```

All routes must reply with a `json` object (and preferably a status if not 200). The object **must** have `.error`, `.message` and `.data`.

Finally, you must `export default` your new route, and then import it in `server/routes/index.js`. Then, add the imported route to the exported array of `routes/index.js`. This will register your route and then you are able to test it with a tool like Postman, or if it is a GET request, then you are welcome to test in the browser, of course!

### Credits

Alistair Smith - Lead developer and maintainer ([aabbccsmith.dev](https://aabbccsmith.dev))

### Thanks

Scott Hiett - Inspiration for the serverside routing system ([hiett.digital](https://hiett.digital))

### License

shopify-monitor is licensed under the Apache 2.0 License (2004). A full license can be viewed [here](LICENSE)
