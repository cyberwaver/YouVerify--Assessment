const PaymentListener = require("./listeners/PaymentListener");

const Listeners = [PaymentListener];
const registerListeners = (container) => () => {
  Listeners.forEach((Listener) => {
    new Listener(container).setupSubscriptions();
    console.log("LISTENER ==> ", Listener.name);
  });
};

module.exports = registerListeners;
