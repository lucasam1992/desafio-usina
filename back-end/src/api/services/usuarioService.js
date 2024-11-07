const jwt = require('jsonwebtoken');
const md5 = require('md5');
const bcrypt = require('bcrypt');
const { usuario } = require('../../database/models');
const { EMAILREGISTRADO, IDNAOENCONTRADO } = require('../schema/usuarioSchema');

const getAllUsuario = async () => {
  const usuarios = await usuario.findAll({
    attributes: {
      exclude: ['senha'],
    },
  });

  return usuarios;
};

const criarUsuario = async ({
  nome, email, senha, role,
}) => {
  const getUsuarioRegistrado = await usuario.findOne({ where: { email } });

  if (getUsuarioRegistrado) {
    return EMAILREGISTRADO;
  }
  // e69dc2c09e8da6259422d987ccbe95b5

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });

  const usuarios = await usuario.create({
    nome, email, senha: hashedPassword, role,
  });

  return usuarios;
};

const getUsuarioPorId = async (id) => {
  const getUsuarioRegistrado = await usuario.findByPk(id);

  if (!getUsuarioRegistrado) return IDNAOENCONTRADO;

  const usuarios = await usuario.findOne({
    where: { id },
    attributes: {
      exclude: ['senha'],
    },
  });

  return usuarios;
};


module.exports = {
  criarUsuario,
  getAllUsuario,
  getUsuarioPorId,
};
