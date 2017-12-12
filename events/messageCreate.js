const CommandHandler = require('../utility/CommandHandler');
const WarnIfInviteLink = require('../utility/WarnIfInviteLink');
module.exports.emit = async(client, message) => {
  const prefix = '='

  if (message.content.match(/https?\:\/\/(?:discordapp\.com\/invite|discord\.gg)\/(?:[A-z]*)/gi)) {
    message.delete();
    await new WarnIfInviteLink(message).init();
    // await message.answer(`You\'re not allowed to invite other people to your server here.\nPlease consider advertising it here: <#303886582606331904>`)
  }

  if (message.author.id === '251659774960205825' && message.content.toLowerCase().includes('אין מה לעשות') || message.content.toLowerCase().includes('there\'s nothing to do')) {
    message.answer('Can you fook off?');
    message.delete();
  }

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
