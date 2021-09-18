const BaseListener = require("./BaseListener");
const {} = require("../events");

class CustomerListener extends BaseListener {
  constructor() {
    super();
  }

  setupSubscriptions() {}
}

module.exports = CustomerListener;
