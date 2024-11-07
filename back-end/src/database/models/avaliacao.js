module.exports = (sequelize, DataTypes) => {
  const avaliacao = sequelize.define('avaliacao', {
    usuarioId: DataTypes.INTEGER,
    filmeId: DataTypes.INTEGER,
    nota: DataTypes.INTEGER,
    comentario: DataTypes.TEXT,
  }, { timestamps: false, tableName: 'avaliacaos', underscored: true });

  avaliacao.associate = (models) => {
    avaliacao.belongsTo(models.usuario, { foreignKey: 'usuarioId', as: 'usuario' });
    avaliacao.belongsTo(models.filme, { foreignKey: 'filmeId', as: 'filme' });
  };

  return avaliacao;
};