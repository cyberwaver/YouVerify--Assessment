const BaseRepo = require("./BaseRepo");
const CustomerModel = require("../infra/database/models/customer.model");

class CustomersRepository extends BaseRepo {
  constructor() {
    super(CustomerModel, { singularName: "customer", pluralName: "customers" });
  }
}

module.exports = CustomersRepository;
