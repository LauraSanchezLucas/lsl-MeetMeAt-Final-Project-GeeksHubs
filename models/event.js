"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.hasMany(models.Appointment, {
        foreignKey: "event_id",
      });
      Event.belongsTo(models.Business, {
        foreignKey: "business_id",
      });
    }
  }
  Event.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      place: DataTypes.STRING,
      date: DataTypes.STRING,
      hour: DataTypes.STRING,
      business_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
