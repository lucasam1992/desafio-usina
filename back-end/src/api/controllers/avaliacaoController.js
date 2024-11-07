const rescue = require('express-rescue');
const validateToken = require('../middlewares/validateToken');
const avaliacaoService = require('../services/avaliacaoService');

const getAllAvaliacao = rescue((req, res) => validateToken(
    req,
    res,
    () => avaliacaoService.getAllAvaliacao(req.query)
      .then((data) => res.status(200).json(data)),
  ));
  
  const getAvaliacaoPorId = rescue((req, res) => validateToken(
    req,
    res,
    () => avaliacaoService
      .getAvaliacaoPorId(req.params.id)
      .then((data) => res.status(200).json(data)),
  ));
  
  const criarAvaliacao = rescue((req, res) => validateToken(
    req,
    res,
    () => avaliacaoService.criarAvaliacao(req.body)
      .then((data) => res.status(201).json(data)),
  ));
  
  const atualizarAvaliacao = rescue((req, res) => validateToken(
    req,
    res,
    () => avaliacaoService
      .atualizarAvaliacao(req.body, req.params.id)
      .then((data) => res.status(200).json(data)),
  ));
  
  const removerAvaliacao = rescue((req, res) => validateToken(
    req,
    res,
    () => avaliacaoService
      .removerAvaliacao(req.params.id)
      .then((data) => res.status(200).json(data)),
  ));

module.exports = {
  getAllAvaliacao,
  criarAvaliacao,
  getAvaliacaoPorId,
  atualizarAvaliacao,
  removerAvaliacao,
};
