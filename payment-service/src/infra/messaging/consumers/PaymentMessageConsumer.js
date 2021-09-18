const MessageConsumer = require("./MessageConsumer");

class PaymentMessageConsumer extends MessageConsumer {
  constructor({ paymentsRepository }) {
    super("payment");
    this.paymentsRepo = paymentsRepository;
  }
  async setupQueueBindings(channel) {
    await this.setupConsumer(channel);
    await this.bindTo("payment.cmd.save", this.savePaymentTxnToDB);
  }

  async savePaymentTxnToDB(data) {
    //a usecase handler should be setup for this, so an internal event can be emitted to maybe send an email
    await this.paymentsRepo.add(data);
  }
}

module.exports = PaymentMessageConsumer;
