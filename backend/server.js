const express = require('express');
const path = require('path');

require('./worker');

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/api/status', (req, res) => {
    res.json({ status: 'running' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.listen(8080, () => console.log('Server running on port 8080'));
