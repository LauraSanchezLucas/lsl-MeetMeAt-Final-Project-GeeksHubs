'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Businesses', 
    [
      {id: 1, user_id: 2, specialty_id: 3, name: 'Initech industries', email: 'initech@gmail.com', phone: '+34969104449', notes: 'Contact Time: from 8:00 am until 15:00 pm',  updatedAt: '2023-01-04', createdAt: '2023-01-12'},
      {id: 2, user_id: 3, specialty_id: 5, name: 'Empire records', email: 'empire@gmail.com', phone: '+34784026819', notes: 'Events on weekends contact with Emy on phone:+34883728758',  updatedAt: '2023-01-04', createdAt: '2023-01-12'},
      {id: 3, user_id: 4, specialty_id: 4, name: 'Oscorp corporation', email: 'oscorp@gmail.com', phone: '+34359397759', notes: '',  updatedAt: '2023-01-04', createdAt: '2023-01-12'},
      {id: 4, user_id: 2, specialty_id: 2, name: 'Hooli Sports', email: 'hooli@gmail.com', phone: '+34703052757', notes: 'working only with 2 weeks notice',  updatedAt: '2023-01-04', createdAt: '2023-01-12'},
      {id: 5, user_id: 2, specialty_id: 1, name: 'Thorns hospitality', email: 'thorns@gmail.com', phone: '+34892847754', notes: '',  updatedAt: '2023-01-04', createdAt: '2023-01-12'},
  
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
