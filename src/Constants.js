'use strict';

module.exports.API_VERSION = 7;
module.exports.GATEWAY_VERSION = 6;
module.exports.GATEWAY_ERRORS = {
    0: 'Gateway Error',
    4000: 'Unknown Error',
    4001: 'Unknown opcode',
    4002: 'Decode Error',
    4003: 'Not Authenticated',
    4004: 'Authentication Failed',
    4005: 'Already Authenticated',
    4007: 'Invalid Seq',
    4008: 'Rate Limited',
    4009: 'Session Timed Out',
    4010: 'Invalid Shard',
    4011: 'Sharding Required',
    4012: 'Invalid API Version',
    4013: 'Invalid Intent(s)',
    4014: 'Disallowed Intent(s)'
};

module.exports.GATEWAY_OP_CODES = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    PRESENCE_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    RESUME: 6,
    RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11,
    0: 'Dispatch',
    1: 'Heartbeat',
    2: 'Identify',
    3: 'Presence Update',
    4:  'Voice State Update',
    6:  'Resume',
    7:  'Reconnect',
    8:  'Request Guild Members',
    9:  'Invalid Session',
    10:  'Hello',
    11:  'Heartbeat ACK',
}


module.exports.VOICE_OP_CODES = {
    IDENTIFY: 0,
    SELECT_PROTOCOL: 1,
    READY: 2,
    HEARTBEAT: 3,
    SESSION_DESCRIPTION: 4,
    SPEAKING: 5,
    HEARTBEAT_ACK: 6,
    RESUME: 7,
    HELLO: 8,
    RESUMED: 9,
    CLIENT_DISCONNECT: 13,
    0: 'Identify',
    1: 'Select Protocol',
    2: 'Ready',
    3: 'Heartbeat',
    4: 'Session Description',
    5: 'Speaking',
    6: 'Heartbeat ACK',
    7: 'Resume',
    8: 'Hello',
    9: 'Resumed',
    13: 'Client Disconnect'
}