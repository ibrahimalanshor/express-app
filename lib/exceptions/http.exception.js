module.exports = class HttpException {
  constructor(status, message, errors) {
    this.status = status || 500;
    this.message = message || 'server error';
    this.errors = errors;
  }
};
