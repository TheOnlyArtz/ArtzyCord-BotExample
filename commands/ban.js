const {EmbedMessage} = require('artz.cord');
const moment = require('moment')

module.exports.execute = async (client, message, args) => {
  const target = message.mentions.users.first();
  const reason = args.split(/ +/gi).slice(1).join(' ');
  const processedReason = reason ? reason : 'No reason was commited';
  if(hasPerms(message, client.user) === false) return await ClientmissingPermissions(message);
  if(hasPerms(message, message.author) === false) return await missingPermissions(message);
  if (!target) return await noTarget(message);

  try {
    let ban = await target.ban(0, processedReason);
    await sendDetails(message, target, processedReason);
  } catch (e) {
    console.error(e);
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
  Embed.newDescription('You do not have enough permissions');
  Embed.setColor(0xCC3333)
  await message.channel.send(Embed)
}

async function ClientmissingPermissions(message) {
  const Embed = new EmbedMessage();
  Embed.newDescription('I don\'t have enough permissions to do this');
  Embed.setColor(0xCC3333)
  await message.channel.send(Embed);
}

async function noTarget(message) {
  const Embed = new EmbedMessage();
  Embed.newDescription('Please mention someone');
  Embed.setColor(0xCC3333)
  await message.channel.send(Embed);
}

function hasPerms(message, author) {
  author = message.guild.members.get(author.id);
  const roles = author.roles.array();
  for (i of roles) {
    const has = i.permissions.has([4]);
    if (!has) {
      return false;
    }
  }
}
