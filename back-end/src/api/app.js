const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const usuario = require('./routes/usuarioRouter');
const login = require('./routes/loginRouter');
const validateToken = require('./routes/validateTokenRouter');
const filme = require('./routes/filmeRouter');
const avaliacao = require('./routes/avaliacaoRouter');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send();
});

// aqui ficara todos os endpoints do projeto
app.use('/login', login);
app.use('/usuarios', usuario);
app.use('/validateToken', validateToken);
app.use('/films', filme)
app.use('/avaliacoes', avaliacao);


module.exports = app;