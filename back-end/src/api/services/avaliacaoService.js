const { avaliacao } = require('../../database/models');

const getAllAvaliacao = async () => {
    const avaliacoes = await avaliacao.findAll();
    return avaliacoes
};

const criarAvaliacao = async (data) => {
  const novaAvaliacao = await avaliacao.create(data);

  return novaAvaliacao;
};

const getAvaliacaoPorId = async (id) => {
  const avaliacaoResult = await avaliacao.findByPk(id);
  return avaliacaoResult;
};

const atualizarAvaliacao = async (data, id) => {
  const avaliacaoAtualizado = await avaliacao.update(data, { where: { id } });

  return avaliacaoAtualizado;
};

const removerAvaliacao = async (id) => {
  await avaliacao.destroy({ where: { id } });

  return 'Avaliacao removida com sucesso';
};

module.exports = {
  getAllAvaliacao,
  criarAvaliacao,
  getAvaliacaoPorId,
  atualizarAvaliacao,
  removerAvaliacao,
};
