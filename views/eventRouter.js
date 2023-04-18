const eventController = require('../controllers/eventController');

const router = require ('express').Router();

// USER - EVENTS
router.get('/all/events', eventController.getAllEvents);

module.exports = router;