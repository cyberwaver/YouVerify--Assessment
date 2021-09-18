const consumers = [];
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
