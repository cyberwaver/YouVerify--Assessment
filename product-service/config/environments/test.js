const path = require("path");
const logPath = path.join(__dirname, "../../logs/development.log");

module.exports = {
  web: {
    PORT: 8001,
  },
  database: {
    mongoDB: {
      URI: "mongodb://127.0.0.1:27017/YouVerifyTest",
    },
  },
  rabbitMQ: {
    URI: "amqps://fhpxmzlp:QNBbenrHqyI2eBcpoKlZnxafW_qlstrz@snake.rmq2.cloudamqp.com/fhpxmzlp",
  },
  logging: {
    appenders: {
      out: { type: "console" },
      task: {
        type: "dateFile",
        filename: logPath,
        pattern: "-dd.log",
        alwaysIncludePattern: true,
      },
      result: {
        type: "dateFile",
        filename: logPath,
        pattern: "-dd.log",
        alwaysIncludePattern: true,
      },
      error: {
        type: "dateFile",
        filename: logPath,
        pattern: "-dd.log",
        alwaysIncludePattern: true,
      },
      default: {
        type: "dateFile",
        filename: logPath,
        pattern: "-dd.log",
        alwaysIncludePattern: true,
      },
      rate: {
        type: "dateFile",
        filename: logPath,
        pattern: "-dd.log",
        alwaysIncludePattern: true,
      },
    },
    categories: {
      default: { appenders: ["out", "default"], level: "info" },
      task: { appenders: ["task"], level: "info" },
      result: { appenders: ["result"], level: "info" },
      error: { appenders: ["error"], level: "error" },
      rate: { appenders: ["rate"], level: "info" },
    },
  },
};
