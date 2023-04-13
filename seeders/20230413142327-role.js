'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', 
    [
      {id: 1, name: 'admin', createdAt: '2023-04-13 00:00:00', updatedAt: '2023-04-13 00:00:00'},
      {id: 2, name: 'business', createdAt: '2023-04-13 00:00:00', updatedAt: '2023-04-13 00:00:00'},
      {id: 3, name: 'public', createdAt: '2023-04-13 00:00:00', updatedAt: '2023-04-13 00:00:00'},
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
