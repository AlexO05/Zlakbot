const { Client, GatewayIntentBits } = require('discord.js');
const commands = require('./commands.js'); // import your commands
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// 👇 HÄR

const token = process.env.TOKEN; 
const PREFIX = "!"; // all commands start with !
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get('1222254603840786484');
  if (channel) {
    //channel.send('i will'); 
  } else {
    console.log('Channel not found!');
  }


});
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // Find the command by name or alias
  const command = Object.values(commands).find(cmd => cmd.aliases.includes(commandName));
  
  if (command) {
    command.execute(message);
  }
});




// 👇 OCH HÄR
client.login(token);