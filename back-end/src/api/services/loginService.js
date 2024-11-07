const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { usuario } = require('../../database/models');

const secret = 'ultra_secret_key';

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const login = async (email, senha) => {
  const userEmailSenha = await usuario.findOne({
    where: { email },
  });

  const passwordMatches = await new Promise((resolve, reject) => {
    bcrypt.compare(senha, userEmailSenha.dataValues.senha, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });

  if (passwordMatches) {
    if (!userEmailSenha) { return { status: 404, message: { message: 'Incorreto email ou senha' } }; }

    const token = jwt.sign(
      {
        data: {
          userEmailSenha: {
            ...userEmailSenha.dataValues,
          },
        },
      },
      secret,
      jwtConfig,
    );

    return { token };
  }
  const error = new Error('Usuário ou senha incorretos.');
  error.status = 404;

  throw error;
};

module.exports = {
  login,
};
