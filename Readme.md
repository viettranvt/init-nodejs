![logo](https://nodejs.org/static/images/logo.svg)

# Init Nodejs

![license](https://img.shields.io/badge/license-MIT-blue.svg)

- Database: mongo.
- Default account:
  - username: master
  - password: 123456789

## Quick start:

- please make sure you have installed the `environment for nodejs`. If you install it, install `nvm`, it helps us to manage multiple node versions and easily switch node versions.
- Make sure you have `nodemon` installed if not then use the command `npm install -g nodemon`.
- Install dependencies: `npm install` or `yarn`.
- Create `.env` file at `root` directory to setup environment variables:

```
DB_HOST = mongodb+srv://trackingClick:abcd-12345@cluster0.sfdzj.mongodb.net/test?retryWrites=true&w=majority
APP_PORT = 3500
```

- Start the server: `nodemon app.js`.

- View locally on: `localhost:3500` || `localhost:3000`.
