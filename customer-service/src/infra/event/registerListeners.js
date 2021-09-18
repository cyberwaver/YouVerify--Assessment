const CustomerListener = require("./listeners/CustomerListener");

const Listeners = [CustomerListener];
const registerListeners = (container) => () => {
  Listeners.forEach((Listener) => Listener.listen(container));
};

module.exports = registerListeners;
