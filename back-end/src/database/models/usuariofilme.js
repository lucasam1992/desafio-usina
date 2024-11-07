module.exports = (sequelize, DataTypes) => {
  const usuariofilme = sequelize.define('usuariofilme', {
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    filmeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'filmes',
        key: 'id'
      }
    },
    assistido: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, { 
    timestamps: false, 
    tableName: 'usuariofilmes', 
    underscored: false 
  });

  usuariofilme.associate = (models) => {
    usuariofilme.belongsTo(models.usuario, { foreignKey: 'usuarioId', as: 'usuario' });
    usuariofilme.belongsTo(models.filme, { foreignKey: 'filmeId', as: 'filme' });
  };

  return usuariofilme;
};
