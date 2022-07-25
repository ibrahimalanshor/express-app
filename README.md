# Express App

## Install

```bash
npm install @ibrahimalanshor/express-app
```

## Usage

```js
const ExpressApp = require('@ibrahimalanshor/express-app')

const app = new ExpressApp({
  port: 5000,
  logging: process.env.NODE_ENV === 'development'
})

app.run()
```