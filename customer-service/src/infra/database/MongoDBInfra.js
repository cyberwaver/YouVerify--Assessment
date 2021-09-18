const mongoose = require("mongoose");

class MongoDBInfra {
  constructor({ config }) {
    this.config = config;
  }

  async setup() {
    return new Promise((resolve, reject) => {
      mongoose.set("debug", true);
      const mongodbUrl = this.config.database.mongoDB.URI;
      console.log("Connecting to ==> ", mongodbUrl);
      mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.Promise = global.Promise;
      const db = mongoose.connection;
      db.on("connected", () => {
        console.log("Mongodb connected");
        resolve();
      });

      db.on("error", (error) => {
        reject("An error occurred - ", error);
        process.exit(0);
      });

      process.on("SIGINT", () => {
        mongoose.connection.close(() => {
          reject("Mongoose disconnected on app termination");
          process.exit(0);
        });
      });
    });
  }
}

module.exports = MongoDBInfra;
