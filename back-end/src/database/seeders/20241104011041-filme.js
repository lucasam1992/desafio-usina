module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'filmes',
      [
        {
          titulo: "IA",
          descricao: "Filme de maquinas no futuro dominando o mundo",
          genero: "Sci Fiction",
          ano_lancamento: 2000,
          duracao: 120
        },
        {
          titulo: "Exterminador do Futuro",
          descricao: "Maquina q vai pro passado matar pessoas e acabar com a resistencia",
          genero: "Sci Fiction",
          ano_lancamento: 1984,
          duracao: 90
        },
        {
          titulo: "De Volta para o Futuro",
          descricao: "Filme de duas pessoas que viagem no tempo para salvar suas familias e o planeta",
          genero: "Sci Fiction",
          ano_lancamento: 1983,
          duracao: 180
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('filmes', null, {});
  },
};
