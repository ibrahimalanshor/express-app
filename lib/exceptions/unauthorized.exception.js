const HttpException = require('./http.exception.js');

module.exports = class UnauthorizedException extends HttpException {
  constructor(message, errors) {
    super(401, message || 'unauthorized', errors);
  }
};
