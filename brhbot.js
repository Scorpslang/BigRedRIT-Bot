const {Client, RichEmbed} = require("discord.js");
const client = new Client();
const config = require("./config.json");
const fortune = require ("./fortunes.json")
const eightball = require ("./8ball.json")
const eightballerr = require ("./8ballerr.json")

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Type !help");
});
prefix = config.prefix 

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
});

client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if(command === "help") {
    message.channel.send({
      embed: {
        title: "Bot Commands",
        description: "To see a page, just add the page number after the " + prefix + "help command",
        fields: [{
          name: prefix + "ping",
          value: "Repond \"pong!\" correspondingly "
        },
        {
          name: prefix + "fortune",
          value: "Give a fortune!"
        },
        {
          name: prefix + "lottery",
          value: "Powerball lottery simulator"
        },
        {
          name: prefix + "8ball",
          value: "Give more fortunes!"
        },
        {
          name: prefix + "flip",
          value: "Flip a coin"
        },
        {
          name: prefix + "dice",
          value: "Roll a 6-face die "
        },
        {
          name: prefix + "quikmafs",
          value: "Generate a random math function"
        }]
      }
    })
  }
  //Manage input
  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "greet") {
    message.channel.send("Hello World");
  }
  if (command === "fortune") {
    fortuneread(message)
  }
  if (command === "lottery") {
    lottery(message)
  }
  if (command === "quikmafs") {
    quick_maths(message)
  }
  if (command === "prefix"){
    setprefix(message, args)
  }
  if (command === "8ball"){
    eight(message, args)
  }
  if (command === "flip"){
    flipCoin(message)
  }
  if (command == "dice"){
    rollDice(message)
  }
  if (command === "reset"){
    resetBot(message.channel)
  }
  if (command === "stop"){
    stopBot(message.channel)
  }
<<<<<<< HEAD
  if (command === "break"){
    soup
  }
});

=======
}
>>>>>>> d810f868a3ab803d00db740073c4b4f5e79dbe78
/* Roll a die */
function rollDice(message) {
	message.channel.send("You rolled " + Math.floor(Math.random() * 6) + 1)
}
/* Flip a coin */
function flipCoin(message) {
	flip = Math.floor(Math.random() * 2)
	if (flip == 0){
	  message.channel.send("Heads!")
	}
	else{
	  message.channel.send("Tails!")
  }
}
/* Get a fortune */
function fortuneread(message){
  message.react('🤔')
    index = Math.floor(Math.random() * fortune.fortunes.length)
    selected = fortune.fortunes[index]
    if (selected.endsWith(".jpg")){
      image = "./images/" + selected;
      message.channel.send({files: [image]})
    }else{
      message.channel.send(selected)
    }
}
/* Generate a random addition fuction */
function quick_maths(message){
  let firstnum = Math.ceil(Math.random() * 100);
  let secondnum = Math.ceil(Math.random() * 100);
  let ans = firstnum + secondnum;
  client.on("message", (message) => {
    if (message == ans){
      userId = message.author.username
    }
  }),
  message.channel.send('What is '+ firstnum + "+" + secondnum + "?")
  .then(() => {
    message.channel.awaitMessages(response => response.content === ("" + ans), {
    max: 1,
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The correct answer was: ${collected.first().content}. Congrats @${userId}.`);
    })
    .catch(() => {
      message.channel.send(`Time limit expired. The correct answer was ${collected.first().content}`);
    });
})
}
/* Powerball lottery */
function lottery(message){
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
/* 8ball fortune */
function eight(message, args){
  if (args[0] == undefined){
	  index = Math.floor(Math.random() * eightballerr.eightballerror.length)
	  selected = eightballerr.eightballerror[index]
	  message.channel.send(selected)
  }
  else{
    index = Math.floor(Math.random() * eightball.eightball.length)
	  selected = eightball.eightball[index]
	  message.channel.send(selected)
  }
}
/* Set prefix */
function setprefix(message, args) {
  let new_prefix = args[0];
    if (new_prefix != undefined && new_prefix.length < 3){
      prefix = new_prefix;
      message.channel.send("Prefix Changed to " + prefix);
      client.user.setActivity("Type "+ prefix + "help");
    }
    else{
      message.channel.send("Invalid Prefix");
    }
  }

/* Terminating bot */
function stopBot(channel){
  channel.send("Terminating current bot")
   .then(() => client.destroy())
}

/* Reset bot */
function resetBot(channel) {
  // send channel a message that you're resetting bot [optional]
  channel.send('Resetting...')
   .then(() => client.destroy())
   .then(() => client.login(config.token));
}

client.login(config.token);