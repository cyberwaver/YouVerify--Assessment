const { appEvent } = require("../Event");

class BaseListener {
  constructor() {}

  listenTo(eventInfoArray, ...handlers) {
    handlers.forEach((handler) =>
      appEvent.registerFor(eventInfoArray[0], this.handlerWrapper(handler))
    );
  }

  handlerWrapper(handler) {
    const innerHandlerWrapper = async (eventMeta) => {
      try {
        await handler.call(this, eventMeta);
      } catch (err) {
        console.log(
          `Handler: ${this._getHandlerEventName(handler)} failed for EVENT: ${
            eventMeta.name
          } =>>> `,
          err
        );
      }
    };
    return innerHandlerWrapper;
  }

  _getHandlerEventName(handler) {
    const domainName = this.constructor.name;
    const handlerName = handler.name;
    return `${domainName}.${handlerName}`;
  }
}

module.exports = BaseListener;
