const rescue = require('express-rescue');
const validateToken = require('../middlewares/validateToken');
const filmeService = require('../services/filmeService');

const getAllFilme = rescue((req, res) => validateToken(
    req,
    res,
    () => filmeService.getAllFilme(req.query)
      .then((data) => res.status(200).json(data)),
  ));
  
  const getFilmePorId = rescue((req, res) => validateToken(
    req,
    res,
    () => filmeService
      .getFilmePorId(req.params.id)
      .then((data) => res.status(200).json(data)),
  ));
  
  const criarFilme = rescue((req, res) => validateToken(
    req,
    res,
    () => filmeService.criarFilme(req.body)
      .then((data) => res.status(201).json(data)),
  ));
  
  const atualizarFilme = rescue((req, res) => validateToken(
    req,
    res,
    () => filmeService
      .atualizarFilme(req.body, req.params.id)
      .then((data) => res.status(200).json(data)),
  ));
  
  const removeFilme = rescue((req, res) => validateToken(
    req,
    res,
    () => filmeService
      .removerFilme(req.params.id)
      .then((data) => res.status(200).json(data)),
  ));

module.exports = {
    getAllFilme,
    getFilmePorId,
    criarFilme,
    atualizarFilme,
    removeFilme,
};
