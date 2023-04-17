const professionalController = require('../controllers/professionalController');
const verifyToken= require('../middleware/verifyToken');
const isProfessional= require('../middleware/isProfessional');

const router = require ('express').Router();

// PROFESSIONAL - APPOINTMENT
router.get('/createappointmentbyprofess', verifyToken, isProfessional, professionalController.getAppointmentProfessional);


module.exports = router;