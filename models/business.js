"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    static associate(models) {
      Business.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Business.belongsTo(models.Specialty, {
        foreignKey: "specialty_id",
      });

      Business.hasMany(models.Event, {
        foreignKey: "business_id",
      });
    }
  }
  Business.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      notes: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      specialty_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Business",
    }
  );
  return Business;
};
