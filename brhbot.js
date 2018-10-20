const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fortune = require ("./fortunes.json")
 
client.on("ready", () => {
  console.log("I am ready!");
  client.channels.get('503044022781083648').send("And I'm back");
});
prefix = config.prefix 
client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "greet") {
    message.channel.send("Hello World");
  }
  if (command === "fortune") {
    let request = args[0]
    message.react('🤔')
    index = Math.floor(Math.random() * fortune.fortunes.length)
    selected = fortune.fortunes[index]
    message.channel.send('Your fortune is: ' +  selected)
  }
});

client.login(config.token);