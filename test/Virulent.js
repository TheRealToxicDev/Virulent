'use strict';

const Discord = require('../Virulent');
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
        client.getChannel("761435208750596111").then((channel) => {
            client.connectVoice(channel.id, channel.guild_id);
        });
        
    }
});

client.login('NzY5MTAwODQ4ODYwMjMzNzI4.X5KG-w.6EG60EmU0S-ORSFFNhAmMOP8WJ0'); // put your bot token here
