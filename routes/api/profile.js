const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public - dont need to send a token to access this route
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;
