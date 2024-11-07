const express = require('express');
const JoiValidate = require('../middlewares/validateJoi');
const { login } = require('../schema/loginSchema');
const loginController = require('../controllers/loginController');

const route = express.Router();

route.post('/', JoiValidate(login), loginController.login);

module.exports = route;
