const HttpException = require('./http.exception.js');

module.exports = class UnprocessableEntityException extends HttpException {
  constructor(message, errors) {
    super(422, message || 'unprocessable entity', errors);
  }
};
