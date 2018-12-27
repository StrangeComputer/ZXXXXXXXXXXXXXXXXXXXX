const Discord = require('discord.js');
const client = new Discord.Client();

const autoDep = `.give-money <@421944342048014366>`;
const autoWith = `<@421944342048014366> одолжи`;

function deposite() {
client.guilds.get('444804338460786688').channels.get('445135163257651211').send('.deposite all');
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
  setInterval(deposite, 3601500);
});  

client.on('ready', () => {
	console.log('Bot loaded');
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
  if (message.content.startsWith(autoDep)) {
    setTimeout( () =>{
      message.channel.send('.dep all')
    }, 500)
}


if ((message.content.startsWith(autoWith)) && ['327872942124040192', '268677125777653760', '421944342048014366', '325756060826730496','376268745695559680',].includes(message.author.id)) {
const amount = message.content.split(" ").slice(2);

if(amount > 10000) return message.channel.send('Твой лимит на данную транзакцию уже это, всё')

setTimeout( () =>{
message.channel.send('.withdraw' +' '+ amount)
}, 500) 

setTimeout( () =>{
message.channel.send('.give-money' + ' ' + message.author + ' ' + 'all')
}, 1500) 
}
});

client.login(process.env.TOKEN);