'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', 
    [
      {id: 1, name: 'admin', createdAt: new Date (), updatedAt: new Date ()},
      {id: 2, name: 'profesional', createdAt: new Date (), updatedAt: new Date ()},
      {id: 3, name: 'public', createdAt: new Date (), updatedAt: new Date ()},
    ], 
      {});
  },

  async down (queryInterface, Sequelize) {
  }
};
