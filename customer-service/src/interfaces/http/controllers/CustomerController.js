const { Router } = require("express");
const Status = require("http-status");
const BaseController = require("./BaseController");
const router = Router();

class CustomerController extends BaseController {
  get router() {
    router.get("/:id", this.getCustomer.bind(this));
    router.get("/", this.getCustomers.bind(this));
    return router;
  }

  async getCustomer(req, res) {
    const { getCustomer } = req.container.cradle;
    this.task(getCustomer, req.params.id).execute(res);
  }

  async getCustomers(req, res) {
    const { getCustomers } = req.container.cradle;
    this.task(getCustomers).execute(res);
  }
}

module.exports = CustomerController;
