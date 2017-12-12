const {EmbedMessage} = require('artz.cord')
const fs = require('mz/fs');
const moment = require('moment');
const ms = require('ms')
class WarnIfInviteLink {
  constructor(message) {
    this.message = message;
  }

  async init() {
    const message = this.message
    const prePunishes = await fs.readFile('./punishes.json', 'utf8')

    const punishes = JSON.parse(prePunishes);

    let WARN_PAYLOD;
    let WARN_COUNT;

    if (!punishes [message.author.id]) punishes[message.author.id] = {}
    if (!punishes[message.author.id]['warns']) {
      WARN_COUNT = 1;
      punishes[message.author.id]['warns'] = 1;
    } else {
      WARN_COUNT = punishes[message.author.id]['warns'] + 1;
      punishes[message.author.id]['warns'] = punishes[message.author.id]['warns'] + 1;
    }

    switch (WARN_COUNT) {
      case 1:
          const Embed = new EmbedMessage;
          Embed.newDescription(`This is your first attempt to invite us to your server\nYou\'ve got a warning role!`)
          Embed.setColor(0xCC3333);
        await message.channel.send(Embed);
        try {
           let role = await message.authorAsMember.assignRole(message.guild.roles.find('name', 'אזהרה'));
        } catch (e) {
          console.log(e);;
        }
        break;
      case 2:
        const Embeds = new EmbedMessage
        Embeds.newDescription(`Hey ${message.author}, You've been warned for: ${WARN_COUNT} times\nYou\'re are being muted as a punish`)
        Embeds.setColor(0xCC3333);
        await message.channel.send(Embeds);
         try {
            let role = await message.authorAsMember.assignRole(message.guild.roles.find('name', 'מושתק'));
            punishes[message.author.id]['mutes'] = moment().add(1, 'days').unix();
         } catch (e) {
           throw e;
         }
        break;

    }
    await fs.writeFile('./punishes.json', JSON.stringify(punishes));
  }

  buildDescriptiveEmbed(content) {
    return Embed;
  }
}

module.exports = WarnIfInviteLink;
