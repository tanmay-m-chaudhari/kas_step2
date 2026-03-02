const express = require('express');
const path = require('path');
const CONFIG = require('./config');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/status', (req, res) => {
    res.json({ env: CONFIG.ENV, version: CONFIG.API_VERSION });
});

app.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log(`Server running at ${CONFIG.HOST}:${CONFIG.PORT}`);
});
