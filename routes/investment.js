const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');

// Get all investment plans
router.get('/', investmentController.getInvestmentPlans);

module.exports = router;
