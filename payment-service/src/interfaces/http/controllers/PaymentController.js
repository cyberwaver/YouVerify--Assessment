const { Router } = require("express");
const Status = require("http-status");
const BaseController = require("./BaseController");
const router = Router();

class PaymentController extends BaseController {
  get router() {
    router.get("/:id", this.getPayment.bind(this));
    router.get("/", this.getPayments.bind(this));
    return router;
  }

  async getPayment(req, res) {
    const { getPayment } = req.container.cradle;
    this.task(getPayment, req.params.id).execute(res);
  }

  async getPayments(req, res) {
    const { getPayments } = req.container.cradle;
    this.task(getPayments).execute(res);
  }
}

module.exports = PaymentController;
