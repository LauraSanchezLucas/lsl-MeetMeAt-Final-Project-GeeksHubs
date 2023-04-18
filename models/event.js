'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      
      Event.hasMany(models.Appointment, {
        foreignKey: 'event_id'
      });
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.DATE,
    hour: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};