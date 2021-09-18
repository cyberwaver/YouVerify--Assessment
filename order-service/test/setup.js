const chai = require("chai");
const dirtyChai = require("dirty-chai");
const chaiChange = require("chai-change");
const chaiAsPromised = require("chai-as-promised");
const cleanDatabase = require("./support/cleanDatabase");
const container = require("../src/container");

chai.use(dirtyChai);
chai.use(chaiChange);
chai.use(chaiAsPromised);
before(async () => {
  await container.resolve("mongoDBInfra").setup();
});
beforeEach(cleanDatabase);
after(() => {
  process.exit(0);
});
