const { DataTypes } = require('sequelize');


module.exports.initModel = (sequelize) => {
  return sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    userId: {
      type: DataTypes.INTEGER, // TODO make as foreign key to User db
      allowNull: false
    }
  });
}
