const Joi = require("joi");
const generateJoiValidationError = require("../utils/generateJoiValidationError");
const validateSchema = require("../utils/schema-validator");

class ProductValidator {
  constructor() {
    this.usersRepo = usersRepository;
  }

  async validateNewProductData(data) {}
}

module.exports = ProductValidator;
