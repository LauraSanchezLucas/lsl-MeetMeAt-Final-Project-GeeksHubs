'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Appointments',
    [
      {id:1, user_id: 5, event_id: 12, updatedAt: new Date (), createdAt: new Date ()},
      {id:2, user_id: 7, event_id: 2, updatedAt: new Date (), createdAt: new Date ()},
      {id:3, user_id: 6, event_id: 5, updatedAt: new Date (), createdAt: new Date ()},
      {id:4, user_id: 5, event_id: 3, updatedAt: new Date (), createdAt: new Date ()},
      {id:5, user_id: 8, event_id: 1, updatedAt: new Date (), createdAt: new Date ()},
      {id:6, user_id: 6, event_id: 10, updatedAt: new Date (), createdAt: new Date ()},
    ],
    {});
    
  },

  async down (queryInterface, Sequelize) {
  }
};
