const MessageConsumer = require("./MessageConsumer");

class PaymentMessageConsumer extends MessageConsumer {
  constructor() {
    super("payment");
  }
  async setupQueueBindings(channel) {
    await this.setupConsumer(channel);
  }
}

module.exports = PaymentMessageConsumer;
