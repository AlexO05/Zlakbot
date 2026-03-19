 const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 👇 HÄR
const token = process.env.TOKEN;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// 👇 OCH HÄR
client.login(token);