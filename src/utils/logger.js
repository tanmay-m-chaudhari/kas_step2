const LEVELS = { info: 'INFO', warn: 'WARN', error: 'ERROR' };

module.exports = {
    log: (msg, level = 'info') => {
        const ts = new Date().toISOString();
        console.log(`[${ts}] [${LEVELS[level] || 'INFO'}] ${msg}`);
    },
    error: (msg) => module.exports.log(msg, 'error'),
    warn: (msg) => module.exports.log(msg, 'warn'),
};
