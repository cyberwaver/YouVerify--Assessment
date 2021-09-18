const path = require("path");
const logPath = path.join(__dirname, "../../logs/development.log");

module.exports = {
  web: {
    PORT: process.env.PORT,
  },
  database: {
    mongoDB: {
      URI: process.env.MONGODB_URI,
    },
  },
  rabbitMQ: {
    URI: process.env.RABBITMQ_URI,
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
