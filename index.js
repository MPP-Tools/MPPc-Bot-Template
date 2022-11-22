const Client = require('./Client.js');
const client = new Client('[TOKEN]');

function run(code){
  if(new String(code)=="[object Object]"==false&&new String(code)=="[object JSON]"==false){
    try {
      return '▶ ' + eval(code);
    } catch (error) {
      return '▶ ' + error
    }
  }
  if(new String(code)=="[object Object]" || new String(code)=="[object JSON]"){
    try {
      return '▶ ' + JSON.stringify(eval(code));
    } catch (error) {
      return '▶ ' + error
    }
  }
}

var allowed = [
]

client.on("hi", () => {
  console.log('hi')
  client.setChannel('[ROOM]')
  client.setName('JS Bot')
})

client.on('a', msg => {
  var isAllowed = (allowed.indexOf(msg.p._id) !== -1);
  var input = msg.a.split(" ").slice(1).join(" ");
  if(msg.a.startsWith("J>")) {
    if(isAllowed) {
      client.say(run(input))
    }
  }
})

client.start()
