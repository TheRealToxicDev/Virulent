const clinet = require('./Client');

module.exports = class Dispathcer {
    constructor(data) {
        this.sessionId = data.session_id || null;
        this.guild_id = data.guild_id || null;
        this.user_id = data.user_id || null;
        this.token = clinet.token || null;
        this.endpoint = data.endpoint|| null;
    }


    play(){
        console.log(this.sessionId);
    }
}