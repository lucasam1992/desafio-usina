const express = require('express');
const filmeController = require('../controllers/filmeController');

const route = express.Router();

route.post('/', filmeController.criarFilme);
route.get('/', filmeController.getAllFilme);
route.get('/:id', filmeController.getFilmePorId);
route.put('/:id', filmeController.atualizarFilme);
route.delete('/:id', filmeController.removeFilme);

module.exports = route;
