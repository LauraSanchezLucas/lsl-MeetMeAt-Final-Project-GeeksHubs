'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Appointments',
    [
      {id:1, user_id: 5, event_id: 12, business_id: 1},
      {id:2, user_id: 7, event_id: 2, business_id: 2},
      {id:3, user_id: 6, event_id: 5, business_id: 5},
      {id:4, user_id: 5, event_id: 3, business_id: 3},
      {id:5, user_id: 8, event_id: 1, business_id: 1},
      {id:6, user_id: 6, event_id: 10, business_id: 1},
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
