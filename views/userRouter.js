const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const appointmentController = require('../controllers/appointmentController');
const businessController = require('../controllers/businessController');
const verifyToken= require('../middleware/verifyToken')

const router = require ('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile);
router.put('/updateprofile', verifyToken, userController.updateProfile);

// USER - EVENTS
router.get('/allevents', eventController.getAllEvents);

// USER - APPOINTMENTS
router.post('/createappointment', verifyToken, appointmentController.createAppointment);
router.get('/appointment', verifyToken, appointmentController.getAppointment);
router.delete('/cancelappointment/:id', verifyToken, appointmentController.deleteAppointmentById);

// USER - BUSINESS
router.get('/business', businessController.getAllBusiness);

module.exports = router;