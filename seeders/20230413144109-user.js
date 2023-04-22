'use strict';
const bcrypt = require('bcrypt');

const password = '123456';
const encryptedPassword = bcrypt.hashSync(password,10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', 
    [
      {id:1, name: 'Laura', surname:'Sanchez Lucas', email: 'laura@gmail.com', phone: '+34607344845', password: encryptedPassword, role_id: 1, createdAt: new Date (), updatedAt: new Date ()},
      {id:2, name: 'Initech industries', surname:'', email: 'initech@gmail.com', phone: '+34969104449', password: encryptedPassword, role_id: 2, createdAt: new Date (), updatedAt: new Date ()},
      {id:3, name: 'Empire records', surname:'', email: 'empire@gmail.com', phone: '+34784026819', password: encryptedPassword, role_id: 2, createdAt: new Date (), updatedAt: new Date ()},
      {id:4, name: 'Oscorp corporation', surname:'', email: 'oscorp@gmail.com', phone: '+34359397759', password: encryptedPassword, role_id: 2, createdAt: new Date (), updatedAt: new Date ()},
      {id:5, name: 'Hooli Sports', surname:'', email: 'hooli@gmail.com', phone: '+34703052757', password: encryptedPassword, role_id: 2, createdAt: new Date (), updatedAt: new Date ()},
      {id:6, name: 'Thorns hospitality', surname:'', email: 'thorns@gmail.com', phone: '+34892847754', password: encryptedPassword, role_id: 2, createdAt: new Date (), updatedAt: new Date ()},
      {id:7, name: 'Gabriel', surname:'Salas Carrero', email: 'gabriel@gmail.com', phone: '+34080267789', password: encryptedPassword, role_id: 3, createdAt: new Date (), updatedAt: new Date ()},
      {id:8, name: 'Pedro', surname:'Gomez Perez', email: 'pedro@gmail.com', phone: '+34369904623', password: encryptedPassword, role_id: 3, createdAt: new Date (), updatedAt: new Date ()},
      {id:9, name: 'Soraya', surname:'Gimenez Sosa', email: 'soraya@gmail.com', phone: '+34596774765', password: encryptedPassword, role_id: 3, createdAt: new Date (), updatedAt: new Date ()},
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
  }
};
