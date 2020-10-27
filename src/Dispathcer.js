const client = require('./Client');
const Payloads = require('./Gateway/Payloads');
const WebSocket = require('./Gateway/WebSocket');
const opus = require('@discordjs/opus')

module.exports = class Dispathcer  {
    constructor(data) {
        this.sessionId =  data.session_id || null;
        this.guild_id = data.guild_id || null;
        this.user_id = data.user_id || null;
        this.channel_id = data.channe_id || null;
        this.token = clinet.token || null;
        this.endpoint = data.endpoint || null;
        this.playtoken = data.playtoken || null;
        this.ws = client.ws;
    }

    /**
     * Update the voice status
     * @param {mute: true || false, deaf: true || false, channel_id: channelid, guild_id: guildid} update 
     */
    sendVoiceStateUpdate(update){
        let voiceState = {
            mute: update.mute,
            deaf: update.deaf,
            channel_id: update.channel_id || this.channel_id,
            guild_id: update.guild_id || this.guild_id
        }

        return this.ws.WSSend(Payloads.UPDATE_VOICE_DATA(voiceState));
    }
}