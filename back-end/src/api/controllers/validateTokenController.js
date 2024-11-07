const rescue = require('express-rescue');
const validateTokenService = require('../services/validateTokenService');

const validateToken = rescue(
  (req, res) => validateTokenService.validate(req, res)
    .then((data) => res.status(200).json(data)),
);

module.exports = {
  validateToken,
};
