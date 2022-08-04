const HttpException = require('./http.exception.js');

module.exports = class NotFoundException extends HttpException {
  constructor(message, errors) {
    super(404, message || 'not found', errors);
  }
};
