class GetProduct {
  constructor({ productsRepository }) {
    this.productsRepo = productsRepository;
  }

  async execute(id) {
    return await this.productsRepo.getById(id);
  }
}

module.exports = GetProduct;
