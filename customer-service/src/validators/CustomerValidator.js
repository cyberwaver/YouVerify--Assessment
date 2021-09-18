const Joi = require("joi");
const generateJoiValidationError = require("../utils/generateJoiValidationError");
const validateSchema = require("../utils/schema-validator");

class CustomerValidator {
  constructor() {
    this.usersRepo = usersRepository;
  }

  async validateNewCustomerData(data) {}
}

module.exports = CustomerValidator;
