const {EmbedMessage} = require('artz.cord');
const moment = require('moment')

module.exports.execute = async (client, message, args) => {
  const target = message.mentions.users.first();
  const reason = args.split(/ +/gi).slice(1).join(' ');
  const processedReason = reason ? reason : 'No reason was commited';
  const auth = message.guild.members.get(message.author.id);
  if (!target) return;
  if(!auth.roles.find('name', 'Staff')) return await missingPermissions(message);

  try {
    let ban = await target.ban(0, processedReason);
    await sendDetails(message, target, processedReason);
  } catch (e) {
    console.error(e);
    await ClientmissingPermissions(message)
  }
}

async function sendDetails(message, member, reason) {
  const Embed = new EmbedMessage();
  Embed.newTitle(`${member.user.username} just got banned!`);
  Embed.newField("Victim:", `${member.user.username}[${member.user.id}]`);
  Embed.newField("Moderator:", `${message.author.username}[${message.author.id}]`);
  Embed.newField("Reason:", reason);
  Embed.newFooter(`Banned in ${moment().format('DD/MM/YYYY HH:mm:ss')}`);
  await message.channel.send(Embed)
}

async function missingPermissions(message) {
  const Embed = new EmbedMessage();
  Embed.newDescription('Permissions are too low');
  Embed.setColor(0xCC3333)
  await message.channel.send(Embed)
}

async function ClientmissingPermissions(message) {
  const Embed = new EmbedMessage();
  Embed.newDescription('I don\'t have enough permissions to do this');
  Embed.setColor(0xCC3333)
  await message.channel.send(Embed);
}
