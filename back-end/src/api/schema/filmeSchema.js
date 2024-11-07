const Joi = require('joi');

const filme = Joi.object({
  titulo: Joi.string(),
  descricao: Joi.text(),
  genero: Joi.string(),
  anoLancamento: Joi.integer(),
  duracao: Joi.integer(),
});

module.exports = {
  filme,
};
