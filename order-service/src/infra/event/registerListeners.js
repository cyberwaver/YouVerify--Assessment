const OrderListener = require("./listeners/OrderListener");

const Listeners = [OrderListener];
const registerListeners = (container) => () => {
  Listeners.forEach((Listener) => {
    new Listener(container).setupSubscriptions();
    console.log("LISTENER ==> ", Listener.name);
  });
};

module.exports = registerListeners;
