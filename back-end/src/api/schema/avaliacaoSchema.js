const Joi = require('joi');

const avaliacao = Joi.object({
  usuarioId: Joi.integer(),
  filmeId: Joi.integer(),
  nota: Joi.integer(),
  comentario: Joi.text(),
});

module.exports = {
    avaliacao,
};
