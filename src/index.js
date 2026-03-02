const express = require('express');
const db = require('./db');
const cache = require('./cache');

const app = express();
app.use(express.json());

app.get('/health', async (req, res) => {
    res.json({ status: 'ok' });
});

const start = async () => {
    await db.connect();
    await cache.init();

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
};

start().catch(console.error);
