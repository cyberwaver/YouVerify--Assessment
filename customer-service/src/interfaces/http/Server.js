const express = require("express");
const cors = require("cors");

class Server {
  constructor({ config, logger }) {
    this.config = config;
    this.logger = logger;
    this.express = express();
  }

  load({ router }) {
    this.express.disable("x-powered-by");
    this.express.use(cors());
    this.express.use(router);
    return this;
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express.listen(this.config.web.PORT, () => {
        const { port } = http.address();
        this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
      });
    });
  }
}

module.exports = Server;
