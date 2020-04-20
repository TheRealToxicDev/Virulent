![](https://i.imgur.com/1gqzxVd.png)
# Virulent
A Personal/Custom JavaScript Discord API Wrapper.

# Installation
Virulent was made with Node v12.16.2 You should preferabaly use this version as well.

Github: ``npm i --save github:TheRealToxicDev/Virulent``

# Features
* Client Support
* Message Support
* Basic Channel Support
* Basic Server Support
* Basic User Support

# To-Do/Planned Updates
* Voice Support
* Full Channel Support
* Full Server Support
* Full User Support

# Virulent Example
```js
'use strict';

const Discord = require('disclyssia');
const client = new Discord.Client();

client.on('ready', async (client) => {
    const self = await client.getSelf();
    console.log(`${self.username}#${self.discriminator} is online !`);
    await client.setPresence({ game: { name: 'Hello, World!' } });
});

client.on('message', (message) => {
    if (message.content.startsWith('!ping')) {
        client.sendMessage(message.channel_id, {
            content: 'Pong!'
        }).catch(console.error);
    }
});

client.login(''); // put your bot token here
```
