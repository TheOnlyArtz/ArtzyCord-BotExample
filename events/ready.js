exports.emit = async (client) => {
  client.logger.info('I\'m ready!');
  client.logger.debug('Socket information:');
  client.logger.debug('=================');
  client.logger.debug(`ID: ${client.user.id}`);
  client.logger.debug(`Username: ${client.user.username}`);
  client.logger.debug(`Discrim: ${client.user.discriminator}`);
  client.logger.debug(`Invite Link: https://discordapp.com/oauth2/authorize/?permissions=0&scope=bot&client_id=${client.user.id}`);
}
