const EventEmitter = require('./utility//EventEmitter');
const CommandHandler = require('./utility//CommandHandler');
const Constants = require('./utility/Constants');
const Config = require('./config.json')
const {Client, EmbedMessage, Box} = require('artz.cord');
const artzlogger = require('artzlogger');
const client = new Client(Constants.DefaultClientPresence);
client.logger = new artzlogger();

// Event Emitter
new EventEmitter(client);

// Command Handler
client.commandProcessor = new CommandHandler(client);

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

client.connect(Config.token);
