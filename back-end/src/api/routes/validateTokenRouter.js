const express = require('express');
const validateTokenController = require('../controllers/validateTokenController');

const route = express.Router();

route.post('/', validateTokenController.validateToken);

module.exports = route;
