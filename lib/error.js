const { ResponseError } = require('./response')

module.exports = () => (err, req, res, next) => {
  if (err instanceof ResponseError) {
    return res.status(err.status).json(err)
  }

  return res.status(500).json(new ResponseError({
    status: 500,
    name: 'server error',
    message: 'server error'
  }))
}