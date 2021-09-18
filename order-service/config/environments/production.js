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
    },
    categories: {
      default: { appenders: ["out"], level: "info" },
    },
  },
};
