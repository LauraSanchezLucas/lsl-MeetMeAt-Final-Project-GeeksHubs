const eventController = require('../controllers/eventController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');
const isProfessional = require('../middleware/isProfessional');

const router = require('express').Router();

// USER - EVENTS
router.get('/all/events', eventController.getAllEvents);

// ADMIN - EVENT
router.delete('/deleteevent/:id', verifyToken, isAdmin, eventController.deleteEventById);
router.post('/newevent', verifyToken, isAdmin, eventController.createEvent);
router.put('/updateeventadmin/:id', verifyToken, isAdmin, eventController.updateEventAdmin);

// PROFESSIONAL - EVENT
router.get('/all/events/professional', verifyToken, isProfessional, eventController.getAllEventsProfessional);
router.delete('/deleteeventprofessi/:id', verifyToken, isProfessional, eventController.deleteEventByProfessionalById);
router.post('/neweventprofessional', verifyToken, isProfessional, eventController.createEventProfessional);

module.exports = router;