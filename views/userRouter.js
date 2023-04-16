const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const appointmentController = require('../controllers/appointmentController');
const verifyToken= require('../middleware/verifyToken')

const router = require ('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile);
router.put('/updateprofile', verifyToken, userController.updateProfile);

// USER - EVENTS
router.get('/allevents', eventController.getAllEvents);

// USER - APPOINTMENTS

router.post('/createappointment', verifyToken, appointmentController.createAppointment);
router.get('/getappointment', verifyToken, appointmentController.getAppointment);

module.exports = router;