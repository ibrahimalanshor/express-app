const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const error = require('./error.js')

module.exports = class App {
  app

  constructor(config, routes) {
    this.#setConfig(config)
    this.#setMiddleware()
    this.#setRoute()
    this.#setError()
  }

  #setConfig(config = {}) {
    this.config = config
    this.app = express()

    this.app.set('port', config.port || 4000)
    this.app.set('logging', config.logging)
  }

  #setMiddleware(options = {}) {
    this.app.use(cors())
    this.app.use(helmet())
    
    if (this.app.get('logging')) {
      this.app.use(morgan('tiny'))
    }
  }

  #setRoute(routes = []) {
    this.app.get('/', (req, res) => res.json('server'))

    for (const route of routes) {
      this.app.use(route.path, route.router)
    }
  }

  #setError() {
    this.app.use(error())
  }

  run(cb) {
    const port = this.app.get('port')

    this.app.listen(port, () => {
      cb ? cb(port) : console.log(`server running at ${port}`)
    })
  }
}