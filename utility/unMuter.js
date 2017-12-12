const fs = require('mz/fs');
class unMuter {
  constructor(message) {
    this.author = message.author;
    this.authorAsMember = message.authorAsMember;
    this.prePunishes = await fs.readFile('./punishes.json', 'utf8')
    this.punishes = JSON.parse(this.prePunishes);
    this.nowUnix = moment().unix();
  }
}
