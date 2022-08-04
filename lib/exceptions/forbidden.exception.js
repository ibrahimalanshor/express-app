const HttpException = require('./http.exception.js');

module.exports = class ForbiddenException extends HttpException {
  constructor(message, errors) {
    super(403, message || 'forbidden', errors);
  }
};
