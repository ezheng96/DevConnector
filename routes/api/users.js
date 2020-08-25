const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public - dont need to send a token to access this route
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or dmore characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists - mongoose functions like this return a promise unless you pass in a callback
      let user = await User.findOne({ email });
      // if user exists, send back an error so we don't have multiple emails
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      // get Users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      // create new user
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // before we save the user, we want to encrypt the password using bcrypt
      // Encrypt password, 10 rounds (recommended) - more is more secure but also slower
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return json Webtoken
      res.send('User registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
