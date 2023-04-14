'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Events',
    [
      {id:1, name: 'CREAM SHOWROOM', description: 'The Fashion Experience showcases Spanish and international Slow Fashion designers. It is an ephemeral space where Cream Showroom will bring a curation of new, independent, local, and sustainable fashion talents and brands.', place: 'C/ Gran Vía number 7, Madrid. ', date: '2023-06-15', hour: '18:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:2, name: 'Summer Music Fest', description: 'A two-day music festival featuring popular bands and artists from around the world, like Soffie Ellar, Five Band, Pablo Martinez.... ', place: 'C/Sol number 5 Alicante', date: '2023-06-15', hour: '15:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:3, name: 'Tech Summit 2023', description: 'A technology conference featuring keynote speakers, workshops, and panel discussions.', place: 'avenida fires, S/N valencia', date: '2023-07-15', hour: '08:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:4, name: 'Mixer mission', description: 'Join us for an evening of language exchange and meet locals and travelers alike. Improve your language skills, share your culture, and make new friends.', place: 'At Café Zurich, Valencia', date: '2023-05-23', hour: '20:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:5, name: 'Dance Fever', description: 'Come dance the night away at our salsa dance party. Whether you are a beginner or an experienced dancer, you will have a great time learning new moves and meeting new people.', place: 'Metro de Alameda - Alameda, 46010 Valencia, España ', date: '2023-07-14', hour: '18:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:6, name: 'Shutter Stroll', description: 'Join us for a photography walk and discover the city´s hidden gems. We will explore different neighborhoods and capture the city´s unique architecture and street art. All skill levels welcome.', place: 'C/ Almirante Cadarso number 26, Valencia', date: '2023-05-10', hour: '10:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:7, name: 'Grapes & Glasses', description: 'Experience the best wines from Valencia and meet other wine lovers at our evening wine tasting event. Learn about the wine-making process and taste a variety of reds, whites, and rosés. Held at various wine bars throughout the city.', place: 'C/ Cuenca 41, 46008, Valencia ', date: '2023-09-16', hour: '17:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:8, name: 'Spanish Flavor´s Festival', description: 'Learn how to make authentic Spanish dishes and meet new people at our cooking classes. We will teach you how to prepare traditional dishes like paella, tapas, and sangria.', place: 'Plaza de San Felipe Neri 6, 46021, Valencia', date: '2023-06-27', hour: '11:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:9, name: 'Game On!', description: 'Come play your favorite board games and meet new people at our board game night. Bring your own games or try out some new ones from our collection. Held at various cafes and game stores throughout the city.', place: 'C/ Literato Azorín, 6, 46006, Valencia', date: '2023-10-08', hour: '19:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:10, name: 'Why not?', description: 'Meet new people and practice your language skills while enjoying a relaxing picnic in the park. Bring your own food and drinks and join us for an afternoon of conversation and fun.', place: 'C/ calatraba number 5, valencia', date: '2023-07-13', hour: '12:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:11, name: 'Hiking Adventure', description: 'Get out of the city and explore the beautiful Catalan countryside with our hiking group. All skill levels welcome. We will visit different trails each month and enjoy breathtaking views of the mountains and sea.', place: 'C/ Rosselló 283, 08037, Barcelona', date: '2023-08-07', hour: '10:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
      {id:12, name: 'Jokes on Us', description: 'Laugh out loud at our crazy stand-up comedy night. Featuring local comedians and occasional international guests, this event is sure to leave you in stitches.', place: 'Pub St. Patrick´s G.V.Marqués del turia 69, 46005, Valencia', date: '2023-09-23', hour: '19:00', createdAt: '2023-04-11', updatedAt: '2023-04-11'},
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
