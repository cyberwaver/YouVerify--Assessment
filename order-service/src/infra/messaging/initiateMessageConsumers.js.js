const PaymentMessageConsumer = require("./consumers/PaymentMessageConsumer");

const consumers = [PaymentMessageConsumer];
const initiateMessageConsumers = async (container) => {
  const sharedChannel = await container.messageProtocol.createChannel();
  await Promise.all(
    consumers.map(async (Consumer) =>
      Consumer.initiate(container).setupQueueBindings(sharedChannel)
    )
  );
};

module.exports = initiateMessageConsumers;
