const CommandHandler = require('../utility/CommandHandler');
module.exports.emit = async(client, message) => {
  const prefix = '='

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commands = client.COMMANDS;
  const type = message.content.split(/ +/gi);
  const args = type.slice(1).join(' ');
  const command = type[0].split(/\=/gi)[1]

  if (command) {
    if (!commands.has(command)) return;
    client.commandProcessor.handleCommand(command, message, args)
  }

}
