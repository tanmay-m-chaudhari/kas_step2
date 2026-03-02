const http = require('http');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'healthy', pid: process.pid }));
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
});

server.listen(PORT, () => {
    logger.log(`Server listening on port ${PORT}`);
});

process.on('SIGTERM', () => {
    logger.warn('Received SIGTERM, shutting down');
    server.close(() => process.exit(0));
});
