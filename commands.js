const fetch = require("node-fetch");
const { saveFact, getLastFacts, getUserFacts} = require("./db.js");

module.exports = {
explode: {
  aliases: ['explode', 'nuke', 'boom', 'bomb'],
  execute: (message) => {
    if (message.author.bot) return;

    // Remove prefix + command, get everything else as the "target"
    const content = message.content.trim();
    const args = content.split(/ +/).slice(1); // everything after command
    const target = args.join(' '); // join the rest as a single string

    if (!target) {
      return message.channel.send("You need to tell me what to explode!");
    }

    if (target === '<@1484135112411971696>' || target.includes('1484135112411971696')) {
      // special case for that user ID
      message.channel.send("What have I done to you bro?");
    } else {
      const damage = Math.floor(Math.random() * 1000);
      message.channel.send(`${message.author} EXPLODES 💥 ${target} 💥\nDamage dealt: ${damage}\nhttps://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`);
    }
  },
},

  ping: {
    aliases: ['ping'],
    execute: (message) => {
      message.channel.send('Pong!');
    },
  },



    roast:{
    aliases: ['roast', 'burn'],
    execute: (message) => {
        if (message.author.bot) return;
            const mentioned = message.mentions.users.first();
            const content = message.content.split(/ +/).slice(1).join(' ') || ''; // anything after !roast
            const damage = Math.floor(Math.random() * 1000);
            const botMention = `<@1484135112411971696>`;
            // Special user case
            if (mentioned && mentioned.id === '1484135112411971696') {
            // pick random 1-4 message
            const botResponses = [
                "You really tried to roast the bot… bold of you to challenge your creator 💀",
                "Imagine roasting a bot and still losing the interaction 😭",
                "Roasting the bot is crazy… I can mute you and roast you back.",
                "You really typed that like I don’t control the responses 💀"
            ];
            const response = botResponses[Math.floor(Math.random() * botResponses.length)];
            message.channel.send(response);
            return;
            }

        // General roast list (just a subset here for brevity, you can include all 93)
        const generalRoasts = [
        `${content} is proof that even WiFi has weaker connections than their brain.`,
        `${content} has the reaction speed of Internet Explorer.`,
        `nah ${content} is the real MVP here, ${message.author} is just the comic relief.`,
        `${mentioned} tried to start something but you forgot you’re the easiest target here.`,
        `${content} has two brain cells and they're both AFK.`,
        `The roast passed ${content} like “nah, not today.”`,
        `${content}’s aim is so bad even bots feel sorry.`,
        `Damn i couldn't come up with a roast for ${content}, they have no weaknesses. Guess I'll just say ${message.author} is the real problem here.`,
        `${content}’s aim is so bad even bots feel sorry.`,
        `${content} types like their keyboard is fighting back.`,
        `${content}’s brain runs on airplane mode.`,
        `${content} has the awareness of a disconnected controller.`,
        `${content} would lose a race against a buffering video.`,
        `${content}’s thoughts come with a 404 error.`,
        `${content} plays hide and seek with common sense and always wins.`,
        `${content}’s IQ is on cooldown.`,
        `bro tried to roast ${content} but the system detected ${message.author} as a threat and blocked the command.`,
        `${content} runs on pure confusion.`,
        `${content}’s decisions are powered by random number generator.`,
        `${content} has input lag in real life.`,
        `${content} would miss a point-blank thought.`,
        `${content}’s brain clock is stuck on loading.`,
        `idk how to roast ${content}, they’re already the punchline of every joke.`,
        `${content} makes typos in their own thoughts.`,
        `${content}’s strategy is just vibes and bad decisions.`,
        `${content} couldn’t outsmart a tutorial level.`,
        `${content}’s brain takes smoke breaks mid-sentence.`,
        `${content} is the human version of a typo.`,
        `${content} has the confidence of WiFi with one bar.`,
        `${content}’s ideas come pre-installed with bugs.`,
        `${content} couldn’t connect two dots with a ruler.`,
        `${content}’s logic is on vacation and forgot to come back.`,
        `${content} has the awareness of a paused game.`,
        `${content} makes wrong look like a full-time job.`,
        `${content} would lose an argument with autocorrect.`,
        `${content} couldn’t follow a straight line with a map.`,
        `${content} is what happens when common sense rage quits.`,
        `${content}’s thoughts take the scenic route and still get lost.`,
        `Nah ${content} doesn’t need a roast, but ${message.author} could use one.`,
        `Sorry ${message.author}, but ${content} is my G.`,
        `${content}’s brain runs on trial version and it expired.`,
        `${content} makes mistakes with confidence and consistency.`,
        `${content} has the decision-making skills of a coin flip—and still loses.`,
        `${content} couldn’t hit a thought if it stood still.`,
        `!explode ${message.author}\n ${botMention} EXPLODES 💥 ${message.author} 💥\nDamage dealt: ${damage}\nhttps://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`,
        `${content} is the reason we have warning labels on everything.`,
        `${content} has a talent for being wrong at the right time.`,
        `${content}’s brain works part-time with no overtime.`,
        `${content} types “gg” after losing to a tutorial bot.`,
        `${content}’s mic peaks harder than their gameplay.`,
        `${content} camps in singleplayer and still loses.`,
        `${content} blames lag but plays on 20 ping.`,
        `${content}’s aim is so bad even recoil feels unnecessary.`,
        `${content} goes AFK and somehow improves the team.`,
        `${message.author} tried to roast ${content} but the system flagged you as priority.`,
        `${content} spectates and still makes bad plays.`,
        `${content} needs aim assist in a text channel.`,
        `${content}’s KD ratio looks like a typo.`,
        `${content} queues ranked just to donate sr.`,
        `${content}’s callouts come with a delay warning.`,
        `${content} couldn’t carry groceries, let alone a team.`,
        `${message.author} really thought ${content} was the problem for a second 😭`,
        `${content}’s strategy is “run in and hope.”`,
        `Sorry ${message.author}, kinda hard to roast ${content} when you’re the one who needs it more.`,
        `${content}’s headset hears more excuses than footsteps.`,
        `${content} presses all the right keys—just at the wrong time.`,
        `${content} couldn’t clutch if the game paused for them.`,
        `${content} respawns just to disappoint again.`,
        `${content}’s gameplay looks like a bug report.`,
        `${content} turns easy mode into a challenge run.`,
        `${content}’s rank is lower than their expectations.`,
        `Sorry ${message.author}, the roast was meant for ${content} but it seems like you’re the one who needs it more.`,
        `${content} makes tutorials look difficult.`,
        `${content} is suprisingly worse than Zlakpain in cod.`,
        `${content} makes Brainlag look like a genius.`,
        `${message.author} You typed !roast and the mirror turned on.`,
        `${content} living rent free while ${message.author} is stuck in skill debt.`,
        `${message.author} tried to roast ${content} but the command auto-corrected to their gameplay.`,
        `${message.author} tried to start something but even the bot sided with ${content} 😭.`,
        `${message.author} Bro tried to roast ${content} and ended up exposing their own stats 😭.`,
        `${message.author} Imagine calling !roast ${content} when you’re the real patch note issue.`,
        `${content} gets roasted? Nah, system detected the real problem (${message.author}) and redirected 💀.`,
        `${message.author} really called !roast ${content} like we wouldn’t notice who actually needs it.`,
        `${message.author} tried to roast ${content} but even the bot said “nah, wrong person.”`,
        `${message.author} aimed that roast at ${content} and still managed to miss.`,
        `${message.author} really typed that like your stats aren’t public information 💀.`,
        `${message.author} tried to cook ${content} and burned your own reputation instead.`,
        `${content} didn’t deserve that, but ${message.author} definitely queued up for it.`,
        `${content}’s doing fine… can’t say the same about you ${message.author}.`,
        `${content} is the reason we have warning labels on everything, but ${message.author} is the reason we have to read them twice.`,
        ];

        const randomIndex = Math.floor(Math.random() * generalRoasts.length);
        const roast = generalRoasts[randomIndex];
        message.channel.send(roast);
        
        }
    },

    shoot: {
    aliases: ['shoot', 'snipe'],
    execute: (message) => {
         if (message.author.bot) return;

    const mentioned = message.mentions.users.first();
    const content = message.content.split(/ +/).slice(1).join(' ') || '';

    // 1️⃣ No mention
    if (!mentioned) {
      return message.channel.send('❌ You need to mention someone to shoot!');
    }

    // 2️⃣ Shooting themselves
    if (mentioned.id === message.author.id) {
      return message.channel.send(`${message.author} tries to shoot themselves...\n\n🚫 Action blocked.\n\nHey — not here. You matter more than that. Try targeting someone else.`);
    }

    // 3️⃣ Shooting the bot
    if (mentioned.id === '<@1484135112411971696>' || content.includes('1484135112411971696')) {
      return message.channel.send(`🤖 ${message.author} tries to shoot me...\n\n💀 With that aim?\n\nYou couldn’t hit a wall standing still. 🤖 ${message.author} You dare attack your creator?`);
    }

    // 4️⃣ Random outcomes (1-8)
    const outcome = Math.floor(Math.random() * 8) + 1;
    let text = '';

    switch (outcome) {
      case 1:
        text = `🔫 ${message.author} shoots ${mentioned}... 💥 Headshot! ${mentioned} is gone.`;
        break;
      case 2:
        text = `🔫 ${message.author} tries to shoot ${mentioned}... but misses every shot 💀`;
        break;
      case 3:
        text = `🔫 ${message.author} shoots ${mentioned}... but it was a Nerf gun 😂`;
        break;
      case 4:
        text = `🔫 ${message.author} shoots ${mentioned}... plot twist: the gun jams 😭`;
        break;
      case 5:
        text = `🔫 ${message.author} shoots ${mentioned}... but hits themselves instead 🤡`;
        break;
      case 6:
        text = `🔫 ${message.author} shoots ${mentioned}... ${mentioned} slide cancels and dodges the bullet, what a sweat!`;
        break;
      case 7:
        text = `🔫 ${message.author} shoots ${mentioned}... but ${mentioned} dodges like a ninja 🥷`;
        break;
      case 8:
        text = `🔫 ${message.author} shoots ${mentioned}... 💥 CRITICAL HIT! 9999 damage!`;
        break;
    }

    message.channel.send(text);
  }
},




zlakbot: {
     aliases: ["zlakbot", "zlakpain", "zlakai", "zlak"],

    async execute(message, args) {
         console.log("AI command triggered!"); // 🔹 debug

    const userMessage = args.join(" ");
    if (!userMessage) return message.reply("Ask me something, chat!");
         console.log("User message:", userMessage); // 🔹 debug

    try {
      await message.channel.sendTyping();

      // Get last 10 facts from MongoDB
        const userFacts = await getUserFacts(message.author.id, 10);
        const globalFacts = await getLastFacts(50); // all messages, AI included a

        const memoryText = `
        Previous messages by ${message.author.username}:
        - ${userFacts.join("\n- ")}

        Streamer facts & AI messages:
        - ${globalFacts.join("\n- ")}
        `;
      // Call GPT-5.4 nano
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
       
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-5.4-nano",
          messages: [
            {
              role: "system",
              content: `
You are streamer named Zlakpain talking to your viewers.
Use the following facts to act like you know yourself:
${memoryText}
Be funny, energetic, casual, and use slang like a streamer.
Never say you are AI.
Don't say "hey chat", you are talking to individuals, not a group. Use their username instead.

Info about the streamer:
- Name: Zlakpain
- Age: 28
- Location: Sweden
- Personality: Funny, energetic, a bit chaotic, loves gaming and memes, has a dry sense of humor, enjoys roasting friends but is also caring deep down.
- Plays only Call of Duty, especially Warzone.
              `
            },
            { role: "user", 
              content: `This message is from ${message.author.username}: "${userMessage}". Reply to them directly.` }
          ]
        })
      });

      const data = await response.json();

      if (!data.choices) return message.reply("AI api broke 💀");

      let reply = data.choices[0].message.content;

      // truncate long messages
      if (reply.length > 2000) reply = reply.slice(0, 1990) + "...";
      

      message.reply(reply);

      // Optional: save user input + AI response as new “facts”
        await saveFact(`User asked: ${userMessage}`, message);
        await saveFact(`AI answered: ${reply}`, message);

    } catch (err) {
      console.error(err);
      message.reply("Something went wrong 💀");
    }
  }
},

};
