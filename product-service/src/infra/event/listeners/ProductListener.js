const BaseListener = require("./BaseListener");
const {} = require("../events");

class ProductListener extends BaseListener {
  constructor() {
    super();
  }

  setupSubscriptions() {}
}

module.exports = ProductListener;
