const {readdir, readdirSync, readFile} = require('fs');
class EventEmitter {
  constructor(client) {
    readdir('events', function(err, files) {
      const EVENTS_PATH = './events/'
      if (err) throw err;
      if (files) {
        files.forEach(i => {
          const EVENT_NAME = i.split('.')[0];
          const path = EVENTS_PATH + i;
          const toEmit = require(path);
          client.on(EVENT_NAME, (...argument) => toEmit.emit(client, ...argument));
        });
      }
    });
  }
}

module.exports = EventEmitter;
