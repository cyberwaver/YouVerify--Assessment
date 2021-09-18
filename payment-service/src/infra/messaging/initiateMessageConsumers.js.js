const PaymentMessageConsumer = require("./consumers/PaymentMessageConsumer");
const OrderMessageConsumer = require("./consumers/OrderMessageConsumer");

const consumers = [PaymentMessageConsumer, OrderMessageConsumer];
const initiateMessageConsumers = async (container) => {
  const sharedChannel = await container.messageProtocol.createChannel();
  console.log(container);
  await Promise.all(
    consumers.map(async (Consumer) =>
      Consumer.initiate(container).setupQueueBindings(sharedChannel)
    )
  );
};

module.exports = initiateMessageConsumers;
