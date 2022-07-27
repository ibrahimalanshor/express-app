const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const error = require('./error.js');

module.exports = class App {
  app;

  constructor(config) {
    this.#setConfig(config);
    this.#setMiddleware(config.middlewares);
    this.#setRoute(config.routes);
    this.#setError({
      loggingError: config.loggingError,
    });
  }

  #setConfig(config = {}) {
    this.config = config;
    this.app = express();

    this.app.set('port', config.port || 4000);
    this.app.set('logging', config.loggingRequest);
  }

  #setMiddleware(middlewares = []) {
    this.app.use(cors());
    this.app.use(helmet());

    if (this.app.get('logging')) {
      this.app.use(morgan('tiny'));
    }

    for (const middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  #setRoute(routes = []) {
    this.app.get('/', (req, res) => res.json('server'));

    for (const route of routes) {
      this.app.use(route.path, route.router);
    }
  }

  #setError(options) {
    this.app.use(
      error({
        logging: options.loggingError ?? false,
      })
    );
  }

  run(cb) {
    const port = this.app.get('port');

    this.app.listen(port, () => {
      cb ? cb(port) : console.log(`server running at ${port}`);
    });
  }
};
