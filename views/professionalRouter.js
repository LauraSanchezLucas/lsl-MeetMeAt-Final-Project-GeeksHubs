const professionalController = require('../controllers/professionalController');

const verifyToken= require('../middleware/verifyToken');
const isProfessional= require('../middleware/isProfessional');

const router = require ('express').Router();

// PROFESSIONAL - APPOINTMENT
router.get('/getappointmentbyprofess/:id', verifyToken, isProfessional, professionalController.getAppointmentProfessional);

// PROFESSIONAL - USER
router.get('/getuserbyprofess', verifyToken, isProfessional, professionalController.findAllUsersProfesional);

module.exports = router;