const professionalController = require('../controllers/professionalController');
const verifyToken= require('../middleware/verifyToken');
const isProfessional= require('../middleware/isProfessional');

const router = require ('express').Router();

// PROFESSIONAL - APPOINTMENT
// es un get o un post que estoy haciendo creando o viendolas
router.get('/createappointmentbyprofess', verifyToken, isProfessional, professionalController.getAppointmentProfessional);
router.get('/getuserbyprofess', verifyToken, isProfessional, professionalController.findAllUsersProfesional);

module.exports = router;