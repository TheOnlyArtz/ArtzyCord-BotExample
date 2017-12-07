const {readdir, readdirSync, readFile} = require('fs');
const {Box} = require('artzycord');
class CommandHandler {
  constructor(client) {
    client.COMMANDS = new Box;
    readdir('commands', function(err, files) {
      const COMMANDS_PATH = './commands/'
      if (err) throw err;
      if (files) {
        files.forEach(i => {
          const COMMAND_NAME = i.split('.')[0];
          const command = require(COMMANDS_PATH + i);
          client.COMMANDS.set(COMMAND_NAME, command);
        });
      }
    })

    this.client = client;
  }

  handleCommand(COMMAND_NAME, message, args) {
    const command = this.client.COMMANDS.get(COMMAND_NAME);
    if (command) {
      command.execute(this.client, message, args)
    }
  }

}

module.exports = CommandHandler;
