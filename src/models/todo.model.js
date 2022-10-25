const { DataTypes } = require('sequelize');


module.exports.initModel = (sequelize) => {
  return sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    userId: {
      type: DataTypes.INTEGER, // TODO make as foreign key to User db
      allowNull: false
    }
  });
}
