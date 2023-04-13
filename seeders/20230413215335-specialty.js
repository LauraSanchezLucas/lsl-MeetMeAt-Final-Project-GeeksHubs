'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Specialties', 
    [
      {id: 1,type: "Social",createdAt: "2023-04-13", updatedAt: "2023-04-13"},
      {id: 2,type: "Sport",createdAt: "2023-04-13", updatedAt: "2023-04-13"},
      {id: 3,type: "Corporate",createdAt: "2023-04-13", updatedAt: "2023-04-13"},
      {id: 4,type: "cultural",createdAt: "2023-04-13", updatedAt: "2023-04-13"},
      {id: 5,type: "musical",createdAt: "2023-04-13", updatedAt: "2023-04-13"},
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
