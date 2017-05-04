This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Lint with ESlint and Airbnb's style sheet.
- Build with Webpack
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code

- Support git hook `pre-commit` used to lint and test your code

## How to use

First, clone the repo.

```bash
$ git clone git@github.com:candyccHUSTer/react-demo.git <yourAppName>
$ cd <yourAppName>
```

Second, delete the old `.git` history and initialize new history.

```bash
$ rm -rf .git
$ git init
```

Third, install the dependencies.

```bash
$ npm install
```

Next, launch the boilerplate app.

```bash
$ npm start
```

Now you should see a new browser window/tab opening in http://127.0.0.1:8080.

use `npm run build` or `npm run deploy` to build the static files.

If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

