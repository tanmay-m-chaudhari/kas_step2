exports.check = (req, res) => {
    res.status(200).json({ status: 'ok' });
};

exports.status = (req, res) => {
    res.status(200).json({
        service: 'api',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};
