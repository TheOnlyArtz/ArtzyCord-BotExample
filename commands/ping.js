const {EmbedMessage} = require('artzycord');
module.exports.execute = async (client, message, args) => {
  const Embed = new EmbedMessage();
  Embed.setColor(0x94DB65);
  Embed.newDescription('Pong!')
  message.channel.send(Embed);
}
