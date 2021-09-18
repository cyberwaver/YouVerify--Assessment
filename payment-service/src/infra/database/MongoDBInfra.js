const mongoose = require("mongoose");

class MongoDBInfra {
  constructor({ config }) {
    this.config = config;
  }

  setup() {
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
    });

    db.on("error", (error) => {
      console.error("An error occurred - ", error);
      process.exit(0);
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("Mongoose disconnected on app termination");
        process.exit(0);
      });
    });
  }
}

module.exports = MongoDBInfra;
