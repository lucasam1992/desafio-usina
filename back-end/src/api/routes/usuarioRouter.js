const express = require('express');
const JoiValidate = require('../middlewares/validateJoi');
const { usuario } = require('../schema/usuarioSchema');
const usuarioController = require('../controllers/usuarioController');

const route = express.Router();

route.post('/', JoiValidate(usuario), usuarioController.criarUsuario);
route.get('/', usuarioController.getAllUsuario);
route.get('/:id', usuarioController.getUsuarioPorId);

module.exports = route;
