const initiateMessageConsumers = require("./initiateMessageConsumers.js");

const setupMessaging = (container) => async () => {
  const { messagePublisher, messageProtocol } = container;
  await messageProtocol.createConnection();
  await messagePublisher.createChannel();
  await initiateMessageConsumers(container);
};

module.exports = setupMessaging;
