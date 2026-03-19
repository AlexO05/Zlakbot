const { Client, GatewayIntentBits } = require('discord.js');
const commands = require('./commands.js'); // import your commands
const Levels = require("discord-xp"); // <-- Add this here at the top
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
Levels.setURL("mongodb+srv://LexTV:DISCORDALEX123@cluster0.mitpovs.mongodb.net/discord-xp?retryWrites=true&w=majority");

});
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;


    // Add XP for every user
    const randomXP = Math.floor(Math.random() * 10) + 5; // Random XP between 5-14
    await Levels.appendXp(message.author.id, message.guild.id, randomXP);

    // Optional: you can check for level-up
    const user = await Levels.fetch(message.author.id, message.guild.id);
    if (user) {
        if (user.levelUp) { // returns true if they leveled up
            message.channel.send(`${message.author}, congratulations! You reached level ${user.level}! 🎉`);
        }
    }

  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // Find the command by name or alias
  const command = Object.values(commands).find(cmd => cmd.aliases.includes(commandName));
  
  if (command) {
    command.execute(message);
  }
});




// 👇 OCH HÄRsa
client.login(token);