const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Handle chat support
router.post('/chat', supportController.chatSupport);

module.exports = router;
