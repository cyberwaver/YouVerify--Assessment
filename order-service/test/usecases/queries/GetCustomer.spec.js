const { expect } = require("chai");
const mongoose = require("mongoose");
const container = require("src/container");
const {
  ValidationException,
  NotFoundException,
  ApplicationException,
} = require("../../../src/exceptions/index");
const factory = require("../../support/factory");
const getCustomer = container.resolve("getCustomer");

describe("GetCustomer", function () {
  const ID = mongoose.Types.ObjectId();
  context("When customer for ID does not exist", async () => {
    it("should throw NotFoundException error", async () => {
      getCustomer.execute(ID).catch((e) => console.log("ERROR: ", e));
      await getCustomer.execute(ID).to.be.rejectedWith(NotFoundException);
    });
  });

  context("When customer for ID exists", async () => {
    before(async () => {
      await factory.create("User", { _id: ID });
    });
    it("should return customer data", async () => {
      const res = await getCustomer.execute(ID);
      expect(res.id).to.equal(ID);
    });
  });
});
