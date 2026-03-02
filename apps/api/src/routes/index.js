const router = require('express').Router();
const healthController = require('../controllers/health');

router.get('/health', healthController.check);
router.get('/status', healthController.status);

module.exports = router;
