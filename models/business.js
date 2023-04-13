'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    notes: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    specialty_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};