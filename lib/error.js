const { Exception } = require('./exceptions');

module.exports = (options) => (err, req, res, next) => {
  if (err instanceof Exception.HttpException) {
    return res.status(err.status).json(err);
  }

  if (options.logging) {
    console.log(err);
  }

  return res.status(500).json({
    status: 500,
    message: 'server error',
  });
};
