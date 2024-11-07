const Joi = require('joi');

const usuario = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
  role: Joi.array().valid('cliente').required(),
});

const EMAILREGISTRADO = {
  message: 'Usuario já foi registrado',
  code: 409,
};

const IDNAOENCONTRADO = {
  message: 'Id não encontrado',
  code: 400,
};

module.exports = {
  usuario,
  EMAILREGISTRADO,
  IDNAOENCONTRADO,
};
