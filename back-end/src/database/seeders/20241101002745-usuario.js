module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          nome: 'Lucas Machado',
          email: 'lucas@gmail.com',
          senha: '$2b$10$3SdyL90ER/BvNmjhlIXZBOIF528dxB/UNOLVCF3MZWOmGJ/1jOiiG',
          role: 'administrador',
        },
        {
          nome: 'Joao Santos',
          email: 'joao@gmail.com',
          senha: '$2b$10$3SdyL90ER/BvNmjhlIXZBOIF528dxB/UNOLVCF3MZWOmGJ/1jOiiG',
          role: 'cliente',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
