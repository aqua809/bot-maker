//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "to ping the bot",
  execute(client, message) {
    message.channel.send("lol no code is available :)");
  }
};
