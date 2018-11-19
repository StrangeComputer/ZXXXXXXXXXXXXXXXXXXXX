const Discord = require('discord.js');
const client = new Discord.Client();

function deposite() {
client.guilds.get('444804338460786688').channels.get('445135163257651211').send('.dep all');
}

client.on('ready', () => {
deposite();
setInterval(deposite, 28800000);
});
 
client.on('ready', () => {
	console.log('Bot loaded');
    client.user.setPresence({game: {name: null}}).catch(o_O=>{});
    client.user.setStatus('invisible');
});

client.login(process.env.TOKEN);