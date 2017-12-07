const CommandHandler = require('../CommandHandler');
module.exports.emit = async(client, message) => {
  if (message.author.bot) return;

  const commands = client.COMMANDS;
  const type = message.content.split(/ +/gi);
  const args = type.slice(1).join(' ');
  const command = type[0]

  if (command) {
    if (!commands.has(command)) return;
    client.commandProcessor.handleCommand(command, message, args)
  }

}
