const adminAppointmentController = require('../controllers/adminAppointmentController');
const businessAppointmentController = require('../controllers/businessAppointmentController');
const userAppointmentController = require('../controllers/userAppointmentController');


const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');
const isProfessional = require('../middleware/isProfessional');

const router = require('express').Router();

// USER - APPOINTMENTS
router.post('/create/appointment', verifyToken, userAppointmentController.createAppointment);
router.get('/appointment', verifyToken, userAppointmentController.getAppointment);
router.delete('/cancelappointment/:id', verifyToken, userAppointmentController.deleteAppointmentById);

// PROFESSIONAL - APPOINTMENT
router.get('/getappointmentbyprofess', verifyToken, isProfessional, businessAppointmentController.getAppointmentProfessional);

// ADMIN - APPOINTMENTS
router.post('/newappointment', verifyToken, isAdmin, adminAppointmentController.createAppointmentAdmin);
router.delete('/deleteappointment/:id', verifyToken, isAdmin, adminAppointmentController.deleteAppointmentById);
router.get('/getappointment', verifyToken, isAdmin, adminAppointmentController.getAppointmentAdmin);

module.exports = router;