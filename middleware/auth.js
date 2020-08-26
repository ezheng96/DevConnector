const jwt = require('jsonwebtoken');
const config = require('config');

// middleware is essentially a function that has access the res and req objects
module.exports = function (req, res, next) {
  // To Access a protected route, must send token if the header of a request
  // Get token from the header
  const token = req.header('x-auth-token');

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
