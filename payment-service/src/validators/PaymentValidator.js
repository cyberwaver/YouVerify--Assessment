const Joi = require("joi");
const validateSchema = require("../utils/schema-validator");

class PaymentValidator {
  constructor() {}

  async validateNewOrderData(data) {
    return validateSchema(
      Joi.object({
        customerId: Joi.string().required(),
        productId: Joi.string().required(),
        orderId: Joi.string().required(),
        amount: Joi.number().required(),
      }),
      data
    );
  }
}

module.exports = PaymentValidator;
