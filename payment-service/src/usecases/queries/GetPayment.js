class GetPayment {
  constructor({ paymentsRepository }) {
    this.paymentsRepo = paymentsRepository;
  }

  async execute(id) {
    return await this.paymentsRepo.getById(id);
  }
}

module.exports = GetPayment;
