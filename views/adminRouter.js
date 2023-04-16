const adminController = require('../controllers/adminController');
const adminAppointmentController = require('../controllers/adminAppointmentController');
const verifyToken= require('../middleware/verifyToken');
const isAdmin= require('../middleware/isAdmin');

const router = require ('express').Router();

// ADMIN - USER
router.put('/updateuserprofile/:id', verifyToken, isAdmin, adminController.updateUserByAdmin)

// ADMIN - APPOINTMENTS
router.post('/newappointment', verifyToken, isAdmin, adminAppointmentController.createAppointmentAdmin);
router.delete('/deleteappointment/:id', verifyToken, isAdmin, adminAppointmentController.deleteAppointmentById);

// ADMIN - BUSINESS


module.exports = router;