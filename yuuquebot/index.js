require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`YuuqueBot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  const content = message.content.trim();
  if (content === '!ping') {
    message.channel.send('Pong! 🏓');
  } else if (content.startsWith('!say ')) {
    const say = content.slice(5);
    if (say.length) message.channel.send(say);
  } else if (content === '!about') {
    message.channel.send('Sou o YuuqueBot — bot exemplo criado por Matheus (YUUQUE).');
  }
});

// Start
client.login(process.env.DISCORD_TOKEN);
