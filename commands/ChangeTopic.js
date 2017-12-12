module.exports.execute = async (client, message, args) => {
  try {
      await message.channel.modify({topic: "test"});
      console.log('done');
  } catch (e) {
    console.error(e);
  }
}
