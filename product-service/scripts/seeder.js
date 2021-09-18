const container = require("../src/container");

const names = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7"];

const products = names.map((name) => ({
  name,
}));

const productsRepo = container.resolve("productsRepository");
const mongoDBInfra = container.resolve("mongoDBInfra");
mongoDBInfra
  .setup()
  .then(() => {
    productsRepo.massInsert(products).then(() => {
      console.log("Product DB Seeded.");
      process.exit(0);
    });
  })
  .catch((err) => console.error("An error occurred seeding db: ", err));
