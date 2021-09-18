const BaseRepo = require("./BaseRepo");
const OrderModel = require("../infra/database/models/order.model");

class OrdersRepository extends BaseRepo {
  constructor() {
    super(OrderModel, { singularName: "order", pluralName: "orders" });
  }
}

module.exports = OrdersRepository;
