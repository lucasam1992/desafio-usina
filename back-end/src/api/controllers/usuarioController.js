const rescue = require('express-rescue');
const validateToken = require('../middlewares/validateToken');
const usuarioService = require('../services/usuarioService');

const getAllUsuario = rescue((req, res) => validateToken(
  req,
  res,
  () => usuarioService.getAllUsuario(req.query)
    .then((data) => res.status(200).json(data)),
));

const criarUsuario = rescue((req, res) => usuarioService.criarUsuario(req.body)
  .then((data) => res.status(201).json(data)));

const getUsuarioPorId = rescue((req, res) => validateToken(
  req,
  res,
  () => usuarioService.getUsuarioPorId(req.params.id)
    .then((data) => res.status(200).json(data)),
));

module.exports = {
  getAllUsuario,
  criarUsuario,
  getUsuarioPorId,
};
