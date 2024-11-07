module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, tableName: 'usuarios', underscored: false });

  usuario.associate = (models) => {
    usuario.hasMany(models.avaliacao, { foreignKey: 'usuarioId', as: 'avaliacao' });
    usuario.belongsToMany(models.filme, { through: 'usuariofilme', foreignKey: 'usuarioId'});
  }

  return usuario;
};
