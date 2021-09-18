const { Router, urlencoded, json } = require("express");
const statusMonitor = require("express-status-monitor");
const cors = require("cors");
const compression = require("compression");
const methodOverride = require("method-override");

module.exports =
  ({ config }) =>
  ({ containerMiddleware, loggerMiddleware, errorHandlerMiddleware, useController }) => {
    const router = Router();
    if (config.env === "development") {
      router.use(statusMonitor());
    }

    if (config.env !== "test") {
      router.use(loggerMiddleware);
    }

    router
      .use(methodOverride("X-HTTP-Method-Override"))
      .use(cors())
      .use(urlencoded({ extended: false }))
      .use(json())
      .use(compression())
      .use(containerMiddleware)
      .use("/", useController("ProductController"))

      .use(errorHandlerMiddleware);

    return router;
  };
