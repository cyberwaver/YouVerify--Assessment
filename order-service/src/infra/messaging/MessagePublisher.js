class MessagePublisher {
  constructor({ messageProtocol }) {
    this.EXCHANGE_NAME = "order";
    this.messageProtocol = messageProtocol;
    this.channel = {};
  }

  async createChannel() {
    const channel = await this.messageProtocol.createChannel();
    await channel.assertExchange(this.EXCHANGE_NAME, "topic", {
      durable: false,
    });
    this.channel = channel;
  }

  async publish(queueName, data) {
    await this.channel.publish(
      this.EXCHANGE_NAME,
      queueName,
      Buffer.from(JSON.stringify(data))
    );
  }
}

module.exports = MessagePublisher;
