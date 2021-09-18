const mongoose = require("mongoose");

module.exports = (factory, { CustomerModel }) => {
  factory.define("Customer", CustomerModel, {
    _id: mongoose.Types.ObjectId(),
    firstName: factory.chance("name", { middle: false, last: false }),
    lastName: factory.chance("name", { middle: false, last: false }),
    email: factory.chance("email"),
  });
};
