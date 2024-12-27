const express = require('express');
const router = express.Router();
const ambassadorController = require('../controllers/ambassadorController');

// Ambassador application
router.post('/apply', ambassadorController.applyForAmbassador);

module.exports = router;
