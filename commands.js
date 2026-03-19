module.exports = {
  explode: {
    aliases: ['explode', 'nuke', 'boom', 'bomb'], // all triggers
    execute: (message) => {
      if (message.author.bot) return;

      const mentioned = message.mentions.users.first();
      const args = message.content.split(' ').slice(1);

      if (mentioned.id === '1484135112411971696') {
        message.channel.send("What have I done to you bro?");
      } else {
        const damage = Math.floor(Math.random() * 1000);
        const msg1 = args[1] || '';
        const msg2 = args[2] || '';
        message.channel.send(`${message.author} EXPLODES 💥 ${msg1} ${msg2} 💥\nDamage dealt: ${damage}\nhttps://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`);
      }
    },
  },

  ping: {
    aliases: ['ping'],
    execute: (message) => {
      message.channel.send('Pong!');
    },
  },
};