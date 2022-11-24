const Client = require('./Client.js');
const client = new Client('[TOKEN]');

var prefix = "!"
var room = "test/botting"
var botName = "ExampleBot"
client.on("hi", () => {
		client.setChannel(room)
		client.setName(`${botName} [ ${prefix}help ]`)
		console.log('Connected')
})

client.on("a", msg => {
  var input = msg.a.split(" ").slice(1).join(" ");
  let cmd =  msg.a.split(' ')[0];
	if(cmd == `${prefix}ex`) {
		client.say(`example`)
	}
})

client.start()
