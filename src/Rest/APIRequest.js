'use strict';

const axios = require('axios');
const Endpoints = require('./Endpoints');

module.exports = class APIRequest {
    constructor(client) {
        this._client = client;
    }

    /**
     * Makes a request to the Discord API
     * @param method
     * @param endpoint
     * @param options
     * @returns {Promise<Object|void>}
     */
    make(method, endpoint, options = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method,
                url: Endpoints.BASE_URL + endpoint,
                data: options.data || null,
                headers: options.headers || {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${this._client.token}`
                }
            })
            .then((response) => resolve(response.data))
            .catch(reject);
        });
    }  
};