'use strict';
const bcrypt = require('bcrypt');

const password = '123456';
const encryptedPassword = bcrypt.hashSync(password,10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('People', 
    [
      {name: 'Laura', surname:'Sanchez Lucas', email: 'laura@gmail.com', phone: '+34607344845', password: encryptedPassword, role_id: 1},
      {name: 'Alvaro', surname:'Bernabe Gil', email: 'alvaro@gmail.com', phone: '+34632655875', password: encryptedPassword, role_id: 2},
      {name: 'Nagore', surname:'Olmos Tejedor', email: 'nagore@gmail.com', phone: '+34953629986', password: encryptedPassword, role_id: 2},
      {name: 'Ricardo', surname:'Ramirez Suarez', email: 'ricardo@gmail.com', phone: '+34711240177', password: encryptedPassword, role_id: 2},
      {name: 'Eider', surname:'Jimeno Cabrera', email: 'eider@gmail.com', phone: '+34641284930', password: encryptedPassword, role_id: 3},
      {name: 'Antonio', surname:'Contrera Abad', email: 'antonio@gmail.com', phone: '+34719672291', password: encryptedPassword, role_id: 3},
      {name: 'Gabriel', surname:'Salas Carrero', email: 'gabriel@gmail.com', phone: '+34080267789', password: encryptedPassword, role_id: 3},
      {name: 'Pedro', surname:'Gomez Perez', email: 'pedro@gmail.com', phone: '+34369904623', password: encryptedPassword, role_id: 3},
      {name: 'Soraya', surname:'Gimenez Sosa', email: 'soraya@gmail.com', phone: '+34596774765', password: encryptedPassword, role_id: 3},
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