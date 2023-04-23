const professionalController = require('../controllers/professionalController');
const eventController = require('../controllers/eventController');

const verifyToken= require('../middleware/verifyToken');
const isProfessional= require('../middleware/isProfessional');

const router = require ('express').Router();

// PROFESSIONAL - APPOINTMENT
router.get('/getappointmentbyprofess/:id', verifyToken, isProfessional, professionalController.getAppointmentProfessional);

// PROFESSIONAL - USER
router.get('/getuserbyprofess', verifyToken, isProfessional, professionalController.findAllUsersProfesional);

// PROFESSIONAL -EVENT
router.post('/neweventprofessional', verifyToken, isProfessional, eventController.createEventProfessional);

module.exports = router;