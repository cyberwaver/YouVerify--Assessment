class GetOrder {
  constructor({ ordersRepository }) {
    this.ordersRepo = ordersRepository;
  }

  async execute(id) {
    return await this.ordersRepo.getById(id);
  }
}

module.exports = GetOrder;
