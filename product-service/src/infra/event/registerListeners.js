const ProductListener = require("./listeners/ProductListener");

const Listeners = [ProductListener];
const registerListeners = (container) => () => {
  Listeners.forEach((Listener) => Listener.listen(container));
};

module.exports = registerListeners;
