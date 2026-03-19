const { Client, GatewayIntentBits } = require('discord.js');
const commands = require('./commands.js'); 
const Levels = require('discord-xp');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const token = process.env.TOKEN; 
const PREFIX = "!"; // all commands start with !

// Initialize discord-xp once
Levels.setURL(process.env.MONGO_URI);

// Bot ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Commands
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // XP gain for activity
  const randomXP = Math.floor(Math.random() * 10) + 5;
  await Levels.appendXp(message.author.id, message.guild.id, randomXP);

  // Check if the message is a command
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = Object.values(commands).find(cmd => cmd.aliases.includes(commandName));
  if (command) {
    command.execute(message, client); // pass client if needed
  }

  // Level check command
  if (commandName === 'level') {
    const target = message.mentions.users.first() || message.author;
    const user = await Levels.fetch(target.id, message.guild.id);

    if (!user) return message.channel.send(`${target} has no XP yet!`);
    message.channel.send(`${target} is level ${user.level} with ${user.xp} XP!`);
  }
});

client.login(token);