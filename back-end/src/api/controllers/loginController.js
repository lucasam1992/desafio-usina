const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const login = rescue((req, res) => loginService.login(req.body.email, req.body.senha)
  .then((data) => res.status(200).json(data)));

module.exports = {
  login,
};
