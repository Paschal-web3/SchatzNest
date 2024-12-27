const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Google Authentication routes
router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleAuthCallback);

// Normal sign-up
router.post('/signup', authController.signup);
router.post('/signup-wallet', authController.signupWithWallet);

module.exports = router;
