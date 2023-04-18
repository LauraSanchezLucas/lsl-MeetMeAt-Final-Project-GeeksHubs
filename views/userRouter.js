const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const userAppointmentController = require('../controllers/userAppointmentController');
const businessController = require('../controllers/businessController');

const verifyToken= require('../middleware/verifyToken')

const router = require ('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile);
router.put('/update/profile', verifyToken, userController.updateProfile);

// USER - EVENTS
router.get('/allevents', eventController.getAllEvents);

// USER - APPOINTMENTS
router.post('/create/appointment', verifyToken, userAppointmentController.createAppointment);
router.get('/appointment', verifyToken, userAppointmentController.getAppointment);
router.delete('/cancelappointment/:id', verifyToken, userAppointmentController.deleteAppointmentById);

// USER - BUSINESS
router.get('/business', businessController.getAllBusiness);

module.exports = router;