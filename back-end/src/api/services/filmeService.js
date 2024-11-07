const { filme } = require('../../database/models');

const getAllFilme = async () => {
    try {
      const filmes = await filme.findAll();

      return filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
};

const criarFilme = async (data) => {
  const novoExame = await filme.create(data);

  return novoExame;
};

const getFilmePorId = async (id) => {
  const filmeResult = await filme.findByPk(id);
  return filmeResult;
};

const atualizarFilme = async (data, id) => {
  const filmeAtualizado = await filme.update(data, { where: { id } });

  return filmeAtualizado;
};

const removerFilme = async (id) => {
  await filme.destroy({ where: { id } });

  return 'Filme removido com sucesso';
};

module.exports = {
  getAllFilme,
  criarFilme,
  getFilmePorId,
  atualizarFilme,
  removerFilme,
};
