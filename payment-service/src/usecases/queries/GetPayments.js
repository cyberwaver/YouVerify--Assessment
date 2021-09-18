class GetPayments {
  constructor({ paymentsRepository }) {
    this.paymentsRepo = paymentsRepository;
  }

  async execute() {
    return await this.paymentsRepo.getMany();
  }
}

module.exports = GetPayments;
