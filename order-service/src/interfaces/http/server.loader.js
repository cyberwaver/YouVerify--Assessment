const path = require("path");
const folderFilesLoader = require("../../utils/folderFilesLoader");
const router = require("./router");
const Server = require("./Server");

const middlewareHash = folderFilesLoader(path.join(__dirname, "./middlewares"));

const serverLoader = (container) => {
  // sync middlewares with container
  const middlewares = Object.entries(middlewareHash).reduce((acc, [name, middleware]) => {
    acc[name] = middleware(container);
    return acc;
  }, {});

  return new Server(container).load({
    router: router(container)(middlewares),
    ...middlewares,
  });
};

module.exports = serverLoader;
