const Status = require("http-status");

module.exports =
  ({ logger }) =>
  (err, req, res, next) => {
    logger.error(err);
    process.env.NODE_ENV === "development"
      ? res.status(Status.INTERNAL_SERVER_ERROR).json({
          type: "InternalServerError",
          message: err.message,
          stack: err.stack,
        })
      : res.status(Status.INTERNAL_SERVER_ERROR).json({
          type: "InternalServerError",
          message: "The server failed to handle this request",
        });
  };
