const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
/* 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("NTAyOTg5MDUxNDAyNjQ5NjE3.DqwnXw.RpLqKTRMkqObOegOz5aGWD7o6rg");
*/
var auth = require('./auth.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			// !greet
			case 'greet':
				bot.sendMessage({
					to: channelID,
					message: 'Hello'
				})
			break;
            // Just add any case commands if you want to..
         }
     }
});