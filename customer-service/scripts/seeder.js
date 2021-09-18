const container = require("../src/container");

const names = ["John1", "John2", "John3", "John4", "John5", "John6", "John7"];

const customers = names.map((name) => ({
  name,
  email: `${name}@yahoo.com`,
}));

const customersRepo = container.resolve("customersRepository");
const mongoDBInfra = container.resolve("mongoDBInfra");
mongoDBInfra
  .setup()
  .then(() => {
    customersRepo.massInsert(customers).then(() => {
      console.log("Customer DB Seeded.");
      process.exit(0);
    });
  })
  .catch((err) => console.error("An error occurred seeding db: ", err));
