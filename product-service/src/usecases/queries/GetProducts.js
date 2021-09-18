class GetProducts {
  constructor({ productsRepository }) {
    this.productsRepo = productsRepository;
  }

  async execute(paginationOpts) {
    return await this.productsRepo.getMany(paginationOpts);
  }
}

module.exports = GetProducts;
