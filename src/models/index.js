exports.initModels = (sequelize) => {
  const models = [
    './todo.model',
    './user.model',
    // TODO: add newly created models here
  ];

  models.forEach(modelPath => {
    const model = require(modelPath).initModel(sequelize);

    model.sync({ alter: true });
  })

  return sequelize.models;
}
