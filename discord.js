client.on('messageCreate', message => {
  // Ignore bot messages
  if (message.author.bot) return;

  // Trigger with !explode
  if (!message.content.startsWith('!explode')) return;

  // Get mentioned user and extra arguments
  const mentioned = message.mentions.users.first();
  const args = message.content.split(' ').slice(1); // everything after the command

  if (mentioned && mentioned.id === '725721249652670555') {
    message.channel.send("What have I done to you bro?");
  } else if (mentioned) {
    const damage = Math.floor(Math.random() * 1000); // 0-999
    const msg1 = args[1] || '';
    const msg2 = args[2] || '';
    message.channel.send(`${mentioned} EXPLODES 💥 ${msg1} ${msg2} 💥\nDamage dealt: ${damage}\nhttps://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`);
  } else {
    message.channel.send("You need to mention someone!");
  }
});