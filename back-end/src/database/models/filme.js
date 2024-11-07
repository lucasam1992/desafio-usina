module.exports = (sequelize, DataTypes) => {
  const filme = sequelize.define('filme', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    genero: DataTypes.STRING,
    ano_lancamento: DataTypes.INTEGER,
    duracao: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'filmes', underscored: false });

  filme.associate = (models) => {
    filme.hasMany(models.avaliacao, { foreignKey: 'filmeId', as: 'avaliacao'});
    filme.belongsToMany(models.usuario, { through: 'usuariofilme', foreignKey: 'filmeId', as: 'assistidousuario'});
  }

  return filme;
};