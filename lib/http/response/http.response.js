module.exports = class HttpResponse {
  constructor(status, message, data) {
    this.status = status || 200;
    this.message = message || 'success';
    this.data = data;
  }

  use(res) {
    return res.status(this.status).json({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
};
