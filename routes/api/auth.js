const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public - dont need to send a token to access this route
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;