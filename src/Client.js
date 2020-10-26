const Endpoints = require('./Rest/Endpoints');
const WebSocket = require('./Gateway/WebSocket');
const Payloads = require('./Gateway/Payloads');
const APIRequest = require('./Rest/APIRequest');
const Dispatcher = require("./Dispathcer");

const { EventEmitter } = require('events');
const FormData = require('form-data');
const { constants } = require('buffer');

module.exports = class Client extends EventEmitter {
    /**
     * The Client Class
     * @param token
     */
    constructor(token = null) {
        super();
        this.token = token;
        this.presence = null;
        this.ws = new WebSocket(this);
        this._APIRequest = new APIRequest(this);
        /* Declare Client Events */
        this.ws.on('ready', (user) => {
            this.emit('ready', this);
        });
        this.ws.on('message', (message) => this.emit('message', message));
        this.ws.on('voice_update', (info) => { this.dispatcher =  new Dispatcher(info); this.emit('voice_update', this.dispatcher)});
    }

    /**
     * Connects the Client to the Discord Gateway
     * @param token
     */
    login(token) {
        this.token = token || this.token;
        this.ws.connect(this.token);
    }

    /**
     * Disconnects the Client from the Discord Gateway
     */
    logout() {
        this.ws.disconnect();
    }

    /**
     * Changes the Client Presence
     * @param data
     * @returns {Promise<void>} Void promise
     */
    setPresence(data) {
        return new Promise((resolve, reject) => {
            try {
                this.presence = data;
                this.ws.WSSend(Payloads.PRESENCE(data));
            } catch (err) {
                reject(err);
            }
    });
  }

  /**
   * Get Client Information
   * @returns {Promise<Object>} Returns a Promise Object of the Client User.
   */
  getSelf() {
      return this._APIRequest.make('get', Endpoints.USER('@me'));
  }

  /**
   * Updates Information of the Client
   * @param data
   * @returns {Promise<Object>}
   */
  updateSelf(data = {}) {
      return this._APIRequest.make('patch', Endpoints.USER('@me'), { data });
  }

  /**
   * Get a specified User
   * @param userId
   * @returns {Promise<Object>} Returns a Promise Object of a Soecified User
   */
  getUser(userId) {
      return this._APIRequest.make('get', Endpoints.USER(userId));
  }

  /**
   * Get all Guilds where the Client is
   * @returns {Promise<Object>} Returns a Promise Object of the Client Guilds
   */
  getGuilds() {
      return this._APIRequest.make('get', Endpoints.GUILDS('@me'));
  }

  /**
   * Get a Specified Guild
   * @param guildId
   * @returns {Promise<Object>} Returns a Promise Object of a Specified Guild
   */
  getGuild(guildId) {
      return this._APIRequest.make('get', Endpoints.GUILD(guildId));
  }

  /**
   * Get all Channels where the Client has access to Read
   * @returns {Promise<Object>} Returns a Promise Object of the Client Channels
   */
  getChannels() {
      return this._APIRequest.make('get', Endpoints.CHANNELS('@me'));
  }

  /**
   * Get a Specified Channel
   * @param channelId
   * @returns {Promise<Object>} Returns a Promise Object of the Client User
   */
  getChannel(channelId) {
      return this._APIRequest.make('get', Endpoints.CHANNEL(channelId));
  }

  /**
   * Create a Message to a Text Channel
   * @param channelId
   * @param data
   * @returns {Promise<Object>} Returns the Message sent to Discord
   */
  sendMessage(channelId, data) {
      return new Promise((resolve, reject) => {
          if (!this.token) {
              reject(new Error('[Promise Rejection] Incorrect Login Details were provided, Please check your token for Client#login()'))
          }
          if (!channelId) {
              reject(new Error('No Channel ID provided, Channel ID is required to use Client#sendMessage()'));
          }
          const form = new FormData();
          if (data.file && typeof data.file === 'object') {
              form.append(data.file.name, data.file.attachment, data.file.name);
          }
          if (data.files) {
              for (let i = 0; i < data.files.length; i++) {
                  let file = data.files[i];
                  form.append(file.name, file.attachment, file.name);
              }
          }
          if (data.embed && data.embed.virulent) {
              data.embed = data.embed.virulent;
          }
          if (data.embeds) {
              for (let i = 0; i < data.embeds.length; i++) {
                  let embed = data.embeds[i];
                  if (embed && embed.virulent) {
                      data.embed[i] = embed.virulent;
                  }
              }
          }
          form.append('payload_json', JSON.stringify(data));
          return this._APIRequest.make('post', Endpoints.CHANNEL_MESSAGES(channelId), {
              data: form,
              headers: Object.assign({ 'Authorization': 'Bot ' + this.token, }, form.getHeaders())
          });
      });
   }

   /**
    * Connects to a voice channel using the channel id, returns a dispacher
    * 
    * @param channelId
    * @returns {Promise<Object>} returns the dispacher see Client#dispatcher()
    */
   connectVoice(channelId, guild_id){
    return new Promise((resolve, reject) => {
        if(!this.token){
            reject(new Error("[Promise Rejection] Incorrect Login Details were provided, Please check your token for Client#login()"))
        }
        if(!channelId){
            reject(new Error('No Channel ID provided, Channel ID is required to use Client#connectVoice()'));
        }

        
        let data = {
            channel_id: channelId,
            guild_id: guild_id
        };

        return this.ws.WSSend(Payloads.UPDATE_VOICE_DATA(data));
    });

   }

};
