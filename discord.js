//Requiring Packages
const Discord = require('discord.js'); //This can also be discord.js-commando or other node based packages!
const leveling = require('./app.js');
 
//Create the bot client
const client = new Discord.Client();
 
//Set the prefix and token of the bot.
const settings = {
  prefix: ';',
  
  token : process.env.TOKEN
}
 
//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on('message', async message => {
 
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
 
  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);
 
  //If the user that types a message is a bot account return.
  if (message.author.bot) return;
 
  //When someone sends a message add xp
  var profile = await leveling.Fetch(message.author.id)
  leveling.AddXp(message.author.id, 10)
  //If user xp higher than 100 add level
  if (profile.xp + 10 > 100) {
    await leveling.AddLevel(message.author.id, 1)
    await leveling.SetXp(message.author.id, 0)
    message.reply(`You just leveled up!! You are now level: ${profile.level + 1}`)
  }
 
  //If the message does not start with your prefix return.
  if (!message.content.startsWith(settings.prefix)) return;
 
  if (command === 'profile') {
 
    var user = message.mentions.users.first() || message.author
 
    var output = await leveling.Fetch(user.id)
    message.channel.send(`Hey ${user.tag}! You have ${output.level} level(s)! and ${output.xp} xp!`);
  }
 
  if (command === 'setxp') {
 
    var amount = args[0]
    var user = message.mentions.users.first() || message.author
 
    var output = await leveling.SetXp(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} xp!`);
  }
 
  if (command === 'setlevel') {
 
    var amount = args[0]
    var user = message.mentions.users.first() || message.author
 
    var output = await leveling.SetLevel(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} levels!`);
  }
 
  if (command === 'leaderboard') {
 
    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
 
      var output = await leveling.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
 
      //Searches for the top 3 and outputs it to the user.
    } else {
 
      leveling.Leaderboard({
        limit: 3 //Only takes top 3 ( Totally Optional )
      }).then(async users => { //make sure it is async
 
        if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place
 
        message.channel.send(`My leaderboard:
 
          1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}
          2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[0] && users[0].xp || 'None'}
          3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)
 
      })
 
    }
  }
 
  if (command == 'delete') { //You want to make this command admin only!
 
    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')
 
    if (!message.guild.me.hasPermission(`ADMINISTRATION`)) return message.reply('You need to be admin to execute this command!')
 
    var output = await leveling.Delete(user.id)
    if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
 
    message.reply('Error: Could not find the user in database.')
 
  }
 
})
 
//Your secret token to log the bot in. (never show this to anyone!)