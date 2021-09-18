const MessageConsumer = require("./MessageConsumer");

class OrderMessageConsumer extends MessageConsumer {
  constructor({ messagePublisher }) {
    super("order");
    this.messagePublisher = messagePublisher;
  }
  async setupQueueBindings(channel) {
    await this.setupConsumer(channel);
    await this.bindTo("order.event.created", this.publishSavePaymentTxnCommand);
  }

  async publishSavePaymentTxnCommand(data) {
    await this.messagePublisher.publish("payment.cmd.save", data);
  }
}

module.exports = OrderMessageConsumer;
