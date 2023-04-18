"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Appointment.belongsTo(models.Event, {
        foreignKey: "event_id",
      });

      Appointment.belongsTo(models.Business, {
        foreignKey: "business_id",
      });
    }
  }
  Appointment.init(
    {
      user_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      business_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
