const HttpResponse = require('./http.response.js');

module.exports = class SuccessResponse extends HttpResponse {
  constructor(message, data) {
    super(200, message || 'success', data);
  }
};
