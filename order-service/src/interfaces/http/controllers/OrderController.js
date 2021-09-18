const { Router } = require("express");
const Status = require("http-status");
const BaseController = require("./BaseController");
const router = Router();

class OrderController extends BaseController {
  get router() {
    router.get("/:id", this.getOrder.bind(this));
    router.get("/", this.getOrders.bind(this));
    router.post("/", this.createNewOrder.bind(this));
    return router;
  }

  async getOrder(req, res) {
    const { getOrder } = req.container.cradle;
    this.task(getOrder, req.params.id).execute(res);
  }

  async getOrders(req, res) {
    const { getOrders } = req.container.cradle;
    this.task(getOrders).execute(res);
  }

  async createNewOrder(req, res) {
    const { createNewOrder } = req.container.cradle;
    this.task(createNewOrder, req.body).execute(res);
  }
}

module.exports = OrderController;
