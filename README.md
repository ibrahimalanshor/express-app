# Express App

## Install

```bash
npm install @ibrahimanshor/express-app
```

## Usage

```js
const ExpressApp = require('@ibrahimalanshor/express-app');

const app = new ExpressApp({
  port: 5000,
  loggingRequest: process.env.NODE_ENV === 'development',
  loggingError: process.env.NODE_ENV === 'development',
});

app.run();
```
