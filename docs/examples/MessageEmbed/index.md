# Message Embed
```js

'use strict';

const Discord = require('virulent');
const Client = new Discord.Client()

Client.on('ready', async (client) => {
   const self = await Client.getSelf();
   console.log(`${self.username}#${self.discriminator} is online!`)
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


Client.login('') // Your token here.
```
