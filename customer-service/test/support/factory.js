const path = require("path");
const { factory } = require("factory-girl");
const MongooseAdapter = require("factory-girl-mongoose").MongooseAdapter;
const FactoriesLoader = require("./FactoriesLoader");
const CustomerModel = require("../../src/infra/database/models/customer.model");

const models = { CustomerModel };
const factoryGirl = new factory.FactoryGirl();
factoryGirl.setAdapter(MongooseAdapter);

module.exports = FactoriesLoader.load({
  factoryGirl,
  models,
  baseFolder: path.join(__dirname, "factories"),
});
