![](https://i.imgur.com/1gqzxVd.png)


## Table of Contents

- [About Virulent](#about)
- [Important Info](#important)
- [Installation](#installation)
- [Features](#features)
- [Update Plans](#plans)
- [Virulent Basics](#basics)
- [Complete Examples](./Examples/EXAMPLES.mkdn)


<a name="about"></a>
# About
Virulent is a powerful node.js module that allows you to interact with the Discord API. Unlike other JavaScript Discord libraries Virulent takes a object-oriented yet slightly more sophisticated approach making your bot's code significantly tidier and easier to comprehend.

<a name="important"></a>
# Important 
Virulent was made with `Node v12.16.2` Would be best to use this version as well.

<a name="installation"></a>
# Installation
NPM: __***Coming Soon***__

GitHub: ``npm i --save github:TheRealToxicDev/Virulent``

<a name="features"></a>
# Features
* Client Support
* Message Support
* Basic Channel Support
* Basic Server Support
* Basic User Support

<a name="plans"></a>
# Planned Updates
* Voice Support
* Full Channel Support
* Full Server Support
* Full User Support

<a name="basics"></a>
# Virulent Basics
```js
'use strict';

const Discord = require('virulent');
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
