//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ktm",
  description: "KTM is my totally music bot to invite write Xktm",
  execute(client, message) {
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=766180045365575681&permissions=2147483639&scope=bot :)");
  }
};
