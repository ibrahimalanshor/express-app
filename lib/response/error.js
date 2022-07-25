module.exports = class ResponseError  {
  constructor(error) {
    return {
      status: error.status,
      title: error.name,
      detail: error.message
    } 
  }
}