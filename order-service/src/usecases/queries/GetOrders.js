class GetOrders {
  constructor({ ordersRepository }) {
    this.ordersRepo = ordersRepository;
  }

  async execute() {
    return await this.ordersRepo.getMany();
  }
}

module.exports = GetOrders;
