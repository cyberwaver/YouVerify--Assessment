class Application {
  constructor({
    server,
    logger,
    mongoDBInfra,
    setupMessaging,
    registerListeners,
  }) {
    this.server = server;
    this.logger = logger;
    this.mongoDBInfra = mongoDBInfra;
    this.registerListeners = registerListeners;
    this.setupMessaging = setupMessaging;
  }

  async start() {
    await this.mongoDBInfra.setup();
    //setup rabbitmq
    await this.setupMessaging();
    this.registerListeners();
    await this.server.start();
  }
}

module.exports = Application;
