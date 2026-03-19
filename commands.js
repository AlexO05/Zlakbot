// commands.js
module.exports = {
  explode: (message) => {
    if (message.author.bot) return;

    const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);

    if (mentioned && mentioned.id === '1484135112411971696') {
      message.channel.send("What have I done to you bro?");
    } else if (mentioned) {
      const damage = Math.floor(Math.random() * 1000);
      const msg1 = args[1] || '';
      const msg2 = args[2] || '';
      message.channel.send(`${mentioned} EXPLODES 💥 ${msg1} ${msg2} 💥\nDamage dealt: ${damage}\nhttps://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`);
    } else {
      message.channel.send("You need to mention someone!");
    }
  },

  ping: (message) => {
    message.channel.send('Pong!');
  },

  // Add more commands here
};