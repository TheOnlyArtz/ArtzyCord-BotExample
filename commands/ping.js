const {EmbedMessage} = require('artz.cord');

module.exports.execute = async (client, message, args) => {
  try {
    let msg = await message.channel.send('Pinging...');
    const ping = new Date(msg.createdTimestamp).getTime() - new Date(message.createdTimestamp).getTime();

    const Embed = new EmbedMessage();
    Embed.setColor(0x94DB65);
    Embed.newDescription(`Pong! ${ping}ms`);
    await msg.edit(Embed)
  } catch (e) {
    throw e;
  }
}
