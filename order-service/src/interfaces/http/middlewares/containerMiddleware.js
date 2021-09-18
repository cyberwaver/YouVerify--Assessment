const containerMiddleware =
  ({ container }) =>
  (req, _, next) => {
    req.container = container.createScope();
    return next();
  };

module.exports = containerMiddleware;
