'use strict';

const Discord = require('virulent');
const Client = new Discord.Client()

Client.on('ready', async (client) => {
   const self = await Client.getSelf();
   console.log(`${self.username}#${self.discriminator} is online!`)
   await Client.setPresence({game: { name: 'Virulent Library', type: 1,  url: 'http://www.twitch.tv/monstercat' } });
});

Client.on('message', (message) => {
  if (message.content.startsWith('!testing')) {
        Client.sendMessage(message.channel_id, { 
          embed: { 
            title: 'Test Embed',
            description: 'LOLI'
          }
     }).catch(console.error);
   }
});


Client.login('NzAxNzM0Mzc2MTUyNDk4MTc2.Xp1zHg.HyMc9h0U9KjQ6iAjHZZyiiiA3CQ')