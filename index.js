const Client = require('./Client.js');
const client = new Client('token');

client.on("hi", () => {
  client.setChannel('test/bot')
  client.setName('Bot')
})

client.start()
