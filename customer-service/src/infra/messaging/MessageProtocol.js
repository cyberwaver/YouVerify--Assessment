const amqp = require("amqplib");
const _ = require("lodash");
const { ApplicationException } = require("../../exceptions");

class MessageProtocol {
  constructor({ config }) {
    this.CONNECTION_URI = config.rabbitMQ.URI;
    this.connection = {};
  }

  get IS_CONNECTED() {
    return _.isEmpty(this.connection) === false;
  }

  async createConnection() {
    try {
      this.connection = await amqp.connect(this.CONNECTION_URI);
    } catch (err) {
      throw new ApplicationException(
        "RabbitMQ: Could not create connection to message server"
      );
    }
  }

  async createChannel() {
    return this.connection.createChannel();
  }
}

module.exports = MessageProtocol;
