const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
});

module.exports = {
  login,
};
