"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image:{
        type: Sequelize.STRING,
        required: true,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      place: {
        type: Sequelize.STRING,
        required: true,
      },
      date: {
        type: Sequelize.STRING,
        required: true,
      },
      hour: {
        type: Sequelize.STRING,
        required: true,
      },
      business_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Businesses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  },
};
