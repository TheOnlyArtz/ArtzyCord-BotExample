const EventEmitter = require('./EventEmitter');
const CommandHandler = require('./CommandHandler');
const Constants = require('./Constants');
const Config = require('./config.json')
const {Client, EmbedMessage, Box} = require('artz.cord');
const client = new Client(Constants.DefaultClientPresence);

// Event Emitter
new EventEmitter(client);

// Command Handler
client.commandProcessor = new CommandHandler(client);

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

client.connect(config.token);
