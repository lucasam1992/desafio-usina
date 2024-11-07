const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');

const route = express.Router();

route.post('/', avaliacaoController.criarAvaliacao);
route.get('/', avaliacaoController.getAllAvaliacao);
route.get('/:id', avaliacaoController.getAvaliacaoPorId);
route.put('/:id', avaliacaoController.atualizarAvaliacao);
route.delete('/:id', avaliacaoController.removerAvaliacao);

module.exports = route;
