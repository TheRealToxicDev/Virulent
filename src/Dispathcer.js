const clinet = require('./Client');
const opus = require('@discordjs/opus')

module.exports = class Dispathcer {
    constructor(data) {
        this.sessionId =  data.session_id || null;
        this.guild_id = data.guild_id || null;
        this.user_id = data.user_id || null;
        this.token = clinet.token || null;
        this.endpoint = data.endpoint || null;
        this.playtoken = data.playtoken || null;
    }


    play(pathToAudio){
        const encoder = new OpusEncoder(48000, 2);

        const encoded = encoder.encode(buffer);
        const decoded = encoder.decode(encoded);
    }
}