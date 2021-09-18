const { ORDER_CREATED } = require("../../infra/event/events");

class CreateNewOrder {
  constructor({ ordersRepository, orderValidator, eventPublisher }) {
    this.ordersRepo = ordersRepository;
    this.orderValidator = orderValidator;
    this.eventPublisher = eventPublisher;
  }

  async execute(requestData) {
    const data = await this.orderValidator.validateNewOrderData(requestData);
    const order = await this.ordersRepo.add(data);
    this.eventPublisher.publish(ORDER_CREATED, order);
    return order;
  }
}

module.exports = CreateNewOrder;
