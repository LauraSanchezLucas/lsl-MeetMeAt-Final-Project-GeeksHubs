const userController = require('../controllers/userController');
const userAppointmentController = require('../controllers/userAppointmentController');


const verifyToken= require('../middleware/verifyToken')

const router = require ('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile);
router.put('/update/profile', verifyToken, userController.updateProfile);



// USER - APPOINTMENTS
router.post('/create/appointment', verifyToken, userAppointmentController.createAppointment);
router.get('/appointment', verifyToken, userAppointmentController.getAppointment);
router.delete('/cancelappointment/:id', verifyToken, userAppointmentController.deleteAppointmentById);


module.exports = router;