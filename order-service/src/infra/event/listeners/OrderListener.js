const BaseListener = require("./BaseListener");
const { ORDER_CREATED } = require("../events");

class OrderListener extends BaseListener {
  constructor({ messagePublisher }) {
    super();
    this.messagePublisher = messagePublisher;
  }

  setupSubscriptions() {
    this.listenTo(ORDER_CREATED, this.publishMessage);
  }

  async publishMessage({ data }) {
    await this.messagePublisher.publish("order.event.created", data);
  }
}

module.exports = OrderListener;
