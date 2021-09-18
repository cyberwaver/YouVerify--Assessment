class GetCustomers {
  constructor({ customersRepository }) {
    this.customersRepo = customersRepository;
  }

  async execute(paginationOpts) {
    return await this.customersRepo.getMany(paginationOpts);
  }
}

module.exports = GetCustomers;
