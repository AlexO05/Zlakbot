const { Client, GatewayIntentBits } = require('discord.js');
const commands = require('./commands.js'); // import your commands
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

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


    const Levels = require("discord-xp");
    Levels.setURL(process.env.MONGO_URI); // or your MongoDB URL
  // Find the command by name or alias
  const command = Object.values(commands).find(cmd => cmd.aliases.includes(commandName));
  
  if (command) {
    command.execute(message);
  }

  
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Random XP per message
  const randomXP = Math.floor(Math.random() * 10) + 5; // 5-15 XP
  const user = await Levels.appendXp(message.author.id, message.guild.id, randomXP);

  // Check if user leveled up
  const userLevel = await Levels.fetch(message.author.id, message.guild.id);



});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!level')) {
    const target = message.mentions.users.first() || message.author;
    const user = await Levels.fetch(target.id, message.guild.id);

    if (!user) return message.channel.send(`${target} has no XP yet!`);

    message.channel.send(`${target} is level ${user.level} with ${user.xp} XP!`);
  }
});


// 👇 OCH HÄRsa
client.login(token);