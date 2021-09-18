const BaseRepo = require("./BaseRepo");
const PaymentModel = require("../infra/database/models/payment.model");

class PaymentsRepository extends BaseRepo {
  constructor() {
    super(PaymentModel, { singularName: "payment", pluralName: "payments" });
  }
}

module.exports = PaymentsRepository;
