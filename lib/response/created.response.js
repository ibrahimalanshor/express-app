const HttpResponse = require('./http.response.js');

module.exports = class CreatedResponse extends HttpResponse {
  constructor(message, data) {
    super(201, message || 'created', data);
  }
};
