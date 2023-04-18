'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Specialties', 
    [
      {id: 1,type: 'Social',createdAt: new Date (), updatedAt: new Date ()},
      {id: 2,type: 'Sports',createdAt: new Date (), updatedAt: new Date ()},
      {id: 3,type: 'Corporate',createdAt: new Date (), updatedAt: new Date ()},
      {id: 4,type: 'cultural',createdAt: new Date (), updatedAt: new Date ()},
      {id: 5,type: 'musical',createdAt: new Date (), updatedAt: new Date ()},
    ], 
      {});
  },

  async down (queryInterface, Sequelize) {
   
  }
};
