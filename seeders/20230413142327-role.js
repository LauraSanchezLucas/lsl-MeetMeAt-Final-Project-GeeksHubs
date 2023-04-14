'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', 
    [
      {id: 1, name: 'admin', createdAt: '2023-04-13', updatedAt: '2023-04-13'},
      {id: 2, name: 'profesional', createdAt: '2023-04-13', updatedAt: '2023-04-13'},
      {id: 3, name: 'public', createdAt: '2023-04-13', updatedAt: '2023-04-13'},
    ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
