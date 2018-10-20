const Discord = require("discord.js");
const client = new Discord.Client();

 
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
<<<<<<< HEAD
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if (message.author.bot) return;
=======
	if(message.substring(0,1) == "!"){
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
		}
	}
>>>>>>> a6f19031a18809ee88c5afd4886d50133399c1c7
});
 
client.login("NTAyOTg5MDUxNDAyNjQ5NjE3.DqwnXw.RpLqKTRMkqObOegOz5aGWD7o6rg");
