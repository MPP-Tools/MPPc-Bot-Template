const Client = require('./Client.js');
const client = new Client('[TOKEN]');

client.on("hi", () => {
  console.log('hi')
  client.setChannel('[ROOM]')
  client.setName('JS Bot')
})

client.on('a', msg => {
  var input = msg.a.split(" ").slice(1).join(" ");
  if(msg.a.startsWith("hi_bot")) {
    client.say("hi.")
  }
})

client.start()
