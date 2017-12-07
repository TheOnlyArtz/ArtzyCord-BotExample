const EventEmitter = require('./EventEmitter');
const CommandHandler = require('./CommandHandler');
const Constants = require('./Constants');

const {Client, EmbedMessage, Box} = require('artzycord');
const client = new Client(Constants.DefaultClientPresence);

// Event Emitter
new EventEmitter(client);
// Command Handler
client.commandProcessor = new CommandHandler(client);

client.connect('Mzg4MzE4MTYzMzc4MzcyNjI4.DQrRBA.TQcwcTC1rY_L_RT5NdFfYPW_42k');
