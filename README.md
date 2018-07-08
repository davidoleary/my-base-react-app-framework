### Changes from Create reate app and client original
* `Jest` instead of mocha + chai + sinon
* `Supertest` for api testing 
* `Puppeteer` for End to end testing in the browser 
* Frontend and api work together during development
* Dev Builds do not break for eslint issues
* Node 8 instead of 6
* Basic Helm configuration
* Single command to run front and backend during development
* Combine backend and frontend test results and coverage 
* SCSS support set up with hotreloading

Project is made up of two parts:
* **App**: Web application using React
* **Server**: API server using Express

## Installation
### Prerequisites
* Node 8.x
* yarn

### Local deployment
1. Clone the repository
2. Open a command-line window at the root of the repository
3. Install the Node modules and `serve` by running:
```
yarn install
yarn global add serve
```

### Docker deployment

First build an image of the app by opening a command-line window in the project root and running:

```
docker build . -t mf-react-app
```

You can then run the container with the command-line by running:

```
docker run -t -p 3020:3020 mf-react-app
```

This will run the `serve` command in [`package.json`](package.json), serving a production build of the server, which is [explained below](building-for-production).

## Usage

### Running the app for development
A single command with start the backend api server and also start the frontend via webpackDevServer

```
yarn start:dev
```

This will:
* Run the frontend app on `localhost:5555` with auto-reloading and auto-compiling using web pack
* Run the backend on `localhost:3020` with auto-compiling (does not auto reload the browser)
You can also run the api and the front end separately see the `package.json` for the individual commands


### Tests
To run unit and api (supertest) tests
```
yarn test
```
To run End to End tests in the browser
```
yarn test:e2e
```

### Coverage
```
yarn run coverage
```

## Building for production

`Must be done in this order`
```
yarn build
yarn build:server
yarn serve
```

You will then find a production-ready build of the app in the `build` folder that includes the backend api and the static front end code. The backend api will serve the frontend code.


## Configuration Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Upgrade notes
The project was extended after ejecting from create-react-app
Bellow are a list of all the changes made from the standard CRA ejected code.
If we want to pull in a new version of the create-react-app base code this list should help us restore the features we need.

`Please document any new changes to allow updates to the create-react-app core can be made.`

**Package.json**
-- The `collectCoverageFrom` property in the jest config has been changed so that server and client coverage details are in a single report
```
"<rootDir>/server/**/?(*.)(spec|test).{js,jsx,mjs}"
```
-- The `testMatch` property in the jest config has been changed so that server and client tests are run via single command
```
"<rootDir>/server/**/?(*.)(spec|test).{js,jsx,mjs}"
```
-- The jest config has a `preset` added to allow puppeteer end to end testing
```
"preset": "jest-puppeteer"
```

-- A `proxy` has been added to allow the react dev sever to send requests to the backend api during developement

-- `"!src/**/registerServiceWorker.js"` has been added to `collectCoverageFrom` as this is a create react app file that we shouldn't need to need to maintain and we don't want to write tests for.

**Config folder**
The following lines were added to the `paths.js` file allow the server code to be compiled via webpack
```
  serverBuild: resolveApp('build/server'),
  serverSrc: resolveApp('server'),
  serverAppJs: resolveApp('server/index.js'),
```

-- The `webpack.config.server.prod.js` is a new file that is also to allow the server to be compiled via webpack

-- The `webpack.config.server.dev.js` has been update:
`emitWarning: true,` has been added to the linter settings - this is to allow the build to continue if there is a linting issue (to help with quick experiments during development)

**registerServiceWorker.js**
This files logic has not been changed from CRA but it does conflict with some of out eslint rules, we have disabled eslint on it as we should not touch it.

**webpack.config.dev.js, webpack.config.prod.js**
To add scss support I followed:
https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc