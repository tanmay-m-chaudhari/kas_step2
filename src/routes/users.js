const router = require('express').Router();
const prisma = require('../db');

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: { posts: true }
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
