const BaseRepo = require("./BaseRepo");
const ProductModel = require("../infra/database/models/product.model");

class ProductsRepository extends BaseRepo {
  constructor() {
    super(ProductModel, { singularName: "product", pluralName: "products" });
  }
}

module.exports = ProductsRepository;
