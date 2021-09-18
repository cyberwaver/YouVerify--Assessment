const isJSON = require("@stdlib/assert-is-json");

class MessageConsumer {
  constructor(exchangeName) {
    this.EXCHANGE_NAME = exchangeName;
    this.channel = {};
  }

  async assertExchange() {
    await this.channel.assertExchange(this.EXCHANGE_NAME, "topic", {
      durable: false,
    });
  }

  async bindTo(queueName, ...handlers) {
    const parentContext = this;
    const q = await this.channel.assertQueue(queueName, { durable: false });
    await this.channel.bindQueue(q.queue, this.EXCHANGE_NAME, queueName);
    console.log("BINDED ==> ", q);
    this.channel.consume(q.queue, async (data) => {
      const content = data.content.toString();
      data.content = isJSON(content) ? JSON.parse(content) : content;
      await Promise.all(handlers.map(async (handler) => handler.call(parentContext, data.content)));
      this.channel.ack(data);
    });
  }

  async useChannel(channel) {
    this.channel = channel;
  }

  //just a short version
  async setupConsumer(channel) {
    await this.useChannel(channel);
    await this.assertExchange();
  }

  static initiate(container) {
    return new this.prototype.constructor(container);
  }
}

module.exports = MessageConsumer;
