const { validationResult } = require('express-validator');
const { Exception } = require('../exceptions');

module.exports = (body) => {
  return [
    body,
    async (req, res, next) => {
      try {
        validationResult(req).throw();

        next();
      } catch (err) {
        next(new Exception.UnprocessableEntityException('', err.mapped()));
      }
    },
  ];
};
