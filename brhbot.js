const {Client, RichEmbed} = require("discord.js");
//const Discord  = require("discord.js")
//const client = new Discord.Client();
const client = new Client({autoReconnect:true});
const config = require("./config.json");
const fortune = require ("./fortunes.json")
const eightball = require ("./8ball.json")

client.on("error", (e) => console.error(e));
client.on("debug", (e) => console.info(e));

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Type !help");
  //client.channels.get('503044022781083648').send("And I'm back");
});
prefix = config.prefix 

client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if(command === "help") {
	message.channel.send({embed: {
	  title: "Bot Commands",
	  description: "To see a page, just add the page number after the " + prefix + "help command",
	  fields: [{
		  name: prefix + "ping",
	      value: prefix + "ping"
		},
		{
		  name: prefix + "fortune",
		  value: prefix + "fortune"
		},
		{
		  name: prefix + "lottery",
		  value: prefix + "lottery"
		}
	  ]
	  }
	})
  }
		
  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "greet") {
    message.channel.send("Hello World");
  }
  if (command === "fortune") {
    message.react('🤔')
    index = Math.floor(Math.random() * fortune.fortunes.length)
    selected = fortune.fortunes[index]
    if (selected.endsWith(".jpg")){
      
    }
    message.channel.send(selected)
  }
  if (command === "lottery") {
    //Generate 5 random numbers from 01 to 69, no 0's.
    //Put those number in order
    //Return those numbers, in a string
    lot = []
    lotstr = ""
    for(i=0;i<5;i++){
      draw = Math.floor((Math.random() * 69) + 1)
      while (lot.includes(draw)){
        draw = Math.floor((Math.random() * 69) + 1)
      }
      lot.push(draw)
    }
    lot.sort(function(a, b){return a - b});
    power = Math.floor((Math.random() * 26) + 1)
    if (power < 10){
      power = ("0" + power)
    }
    for(i=0;i<5;i++){
      if (lot[i] < 10){
        lot[i] = ("0" + lot[i])
      }
      lotstr += lot[i] + " "
    }
    const embed = new RichEmbed()
    .setTitle("Your Lottery Numbers")
    .setDescription(lotstr + ":red_circle:" + power)
    .setColor('GREEN')
    message.channel.send(embed);
  }
  if (command === "prefix"){
    let new_prefix = args[0];
    if (new_prefix != undefined && new_prefix.length < 3){
      prefix = new_prefix;
      message.channel.send("Prefix Changed to " + prefix);
      client.user.setGame("Type "+ prefix + "help");
    }
    else{
      message.channel.send("Invalid Prefix");
    }
  }
  if (command === "8ball"){
	index = Math.floor(Math.random() * eightball.eightball.length)
	selected = eightball[index]
	message.channel.send(selected)
  }
});

client.login(config.token);