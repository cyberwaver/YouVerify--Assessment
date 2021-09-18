const _ = require("lodash");
const { appEvent } = require("../infra/event/Event");

class EventPublisher {
  publish(event, data) {
    let eventName = event;
    let dataToPublish = data;
    if (Array.isArray(event)) {
      const [name, keys] = event;
      eventName = name;
      dataToPublish = this._extractDataForKeys(keys, data);
    }
    const eventData = {
      name: eventName,
      occuredOn: new Date(),
      data: dataToPublish,
    };

    console.log("NEW EVENT ==> ", {
      name: eventName,
      occuredOn: new Date(),
      data: dataToPublish,
    });

    appEvent.publish(eventName, eventData);
  }

  async initiate() {}

  _extractDataForKeys(keys, data) {
    if (keys.length === 0) return data;
    return _.pick(data, keys);
  }
}

module.exports = EventPublisher;
