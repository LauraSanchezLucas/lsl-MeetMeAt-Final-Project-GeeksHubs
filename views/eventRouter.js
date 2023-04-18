const eventController = require('../controllers/eventController');

const verifyToken= require('../middleware/verifyToken');
const isAdmin= require('../middleware/isAdmin');

const router = require ('express').Router();

// USER - EVENTS
router.get('/all/events', eventController.getAllEvents);

// ADMIN - EVENT
router.delete('/deleteevent/:id', verifyToken, isAdmin, eventController.deleteEventById);
router.post('/newevent', verifyToken, isAdmin, eventController.createEvent);

module.exports = router;