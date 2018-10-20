const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
  console.log("I am ready!");
  client.channels.get('503044022781083648').send("And I'm back");
});
 
client.on("message", (message) => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "greet") {
    message.channel.send("Hello World");
  }
  if (command === "fortune") {
    message.react('🤔')
    message.reply('Your fortune is:')
  }
});

client.login(config.token);