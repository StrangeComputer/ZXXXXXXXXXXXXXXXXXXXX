const Discord = require('discord.js');
const client = new Discord.Client();

const giveMoney = `Герой, передай деньги Винтову`;
const depMoney = `Герой, закинь деньги в банк`;

function deposite() {
client.guilds.get('444804338460786688').channels.get('445135163257651211').send('.dep all');
}

function rabota() {
  client.guilds.get('444804338460786688').channels.get('445135163257651211').send('.work');
}
 
client.on('ready', () => {
  rabota();
  setInterval(rabota, 3600000);
});

client.on('ready', () => {
  deposite();
  setInterval(deposite, 3600500);
});  

client.on('ready', () => {
	console.log('Bot loaded');
    client.user.setPresence({game: {name: null}}).catch(o_O=>{});
    client.user.setStatus('invisible');
});

client.on('ready', () => {
	console.log('//------------------//');
    console.log('Бот запущен успешно.');
    console.log('');
    console.log('Краткая информация:');
    console.log('- Авторизован как ' + client.user.tag);
    console.log('//------------------//');
});

client.on('message', message => {
  if ((message.content.startsWith(giveMoney)) && ['327872942124040192'].includes(message.author.id)) {
  message.channel.send('.withdraw all')
  message.delete();
  message.channel.send('.give-money <@268677125777653760>')
  message.delete();
  }
  if (message.content.startsWith(depMoney)) {
message.channel.send('.dep all')
  }
});

client.login(process.env.TOKEN);