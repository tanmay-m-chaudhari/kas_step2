const { createClient } = require('redis');

const client = createClient({
    url: process.env.REDIS_URL || 'redis://cache:6379',
});

module.exports = {
    init: async () => {
        await client.connect();
    },
    get: (key) => client.get(key),
    set: (key, value) => client.set(key, value),
};
