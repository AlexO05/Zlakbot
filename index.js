
const { Client, GatewayIntentBits } = require('discord.js');
const commands = require('./commands.js'); // import your commands
const { connectDB } = require("./db.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});


const token = process.env.TOKEN; 
const PREFIX = "!"; // all commands start with !
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get('1222254603840786484');
  if (channel) {
    //channel.send('Nah i love you grinch ❤️'); 
  } else {
    console.log('Channel not found!');
  }
});
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = Object.values(commands).find(cmd => cmd.aliases.includes(commandName));
  
   



  if (command) {
    try {
      await command.execute(message, args); // 👈 await here
    } catch (error) {
      console.error(error);
      message.reply("Something went wrong executing that command.");
    }
  }
});




// 👇 OCH HÄRsa
connectDB().then(() => {
  client.login(process.env.TOKEN);
});