const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// 👇 HÄR
const token = process.env.TOKEN;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get('1222254603840786484');
  if (channel) {
    //channel.send('Yo wassup guys');
  } else {
    console.log('Channel not found!');
  }


});

// 👇 OCH HÄR
client.login(token);