const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const secret = 'ultra_secret_key';

// eslint-disable-next-line consistent-return
module.exports = rescue(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token nao encontrado' });

  try {
    const decoded = jwt.verify(token.replace(/^Bearer[:]?\s+/, ''), secret);

    req.payload = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expirado ou invalido' });
  }
});
