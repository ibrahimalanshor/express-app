const HttpException = require('./http.exception.js');

module.exports = class ConflictException extends HttpException {
  constructor(message, errors) {
    super(409, message || 'conflict', errors);
  }
};
