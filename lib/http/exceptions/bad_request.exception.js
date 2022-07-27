const HttpException = require('./http.exception.js');

module.exports = class BadRequestException extends HttpException {
  constructor(message, errors) {
    super(400, message || 'bad request', errors);
  }
};
