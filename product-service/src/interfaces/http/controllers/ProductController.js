const { Router } = require("express");
const Status = require("http-status");
const BaseController = require("./BaseController");
const router = Router();

class ProductController extends BaseController {
  get router() {
    router.get("/:id", this.getProduct.bind(this));
    router.get("/", this.getProducts.bind(this));
    return router;
  }

  async getProduct(req, res) {
    const { getProduct } = req.container.cradle;
    this.task(getProduct, req.params.id).execute(res);
  }

  async getProducts(req, res) {
    const { getProducts } = req.container.cradle;
    this.task(getProducts).execute(res);
  }
}

module.exports = ProductController;
