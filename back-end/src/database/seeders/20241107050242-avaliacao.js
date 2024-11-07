module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'avaliacaos',
      [
        {
          usuario_id: 2,
          filme_id: 1,
          nota: 1,
          comentario: 'Filme que peca na história. Muito óbvio',
        },
        {
          usuario_id: 2,
          filme_id: 2,
          nota: 4,
          comentario: 'Filme com ótimo roteiro. Personagens carismaticos'
        }
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('avaliacaos', null, {});
  },
};
