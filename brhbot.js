const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
  console.log("I am ready!");
  client.channels.get('503044022781083648').send("And I'm back");
});
 
client.on("message", (message) => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(config.prefix + "greet")) {
    message.channel.send("Hello World");
  }
});

client.login(config.token);