const Joi = require("joi");

const generateJoiValidationError = (message, path) =>
  new Joi.ValidationError(message, [{ message, path: [path] }]);

module.exports = generateJoiValidationError;
