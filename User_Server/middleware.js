const jwt = require('jsonwebtoken');

function validateJwt(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - JWT missing' });
  }

  jwt.verify(token, 'marcraineerfilosopo06272000', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid JWT' });
    }

    req.jwtPayload = decoded;
    next();
  });
}

module.exports = validateJwt;