class GetCustomer {
  constructor({ customersRepository }) {
    this.customersRepo = customersRepository;
  }

  async execute(id) {
    return await this.customersRepo.getById(id);
  }
}

module.exports = GetCustomer;
