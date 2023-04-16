const adminController = require('../controllers/adminController');
const adminAppointmentController = require('../controllers/adminAppointmentController');
const adminRoleController = require('../controllers/adminRoleController');
const adminEventController = require('../controllers/adminEventController');
const verifyToken= require('../middleware/verifyToken');
const isAdmin= require('../middleware/isAdmin');

const router = require ('express').Router();

// ADMIN - USER
router.put('/updateuserprofile/:id', verifyToken, isAdmin, adminController.updateUserByAdmin);
router.get('/allusers', verifyToken, isAdmin, adminController.findAllUsersAdmin);
router.delete('/cancelluser/:id', verifyToken, isAdmin, adminController.deleteUserByAdmin);

// ADMIN - APPOINTMENTS
router.post('/newappointment', verifyToken, isAdmin, adminAppointmentController.createAppointmentAdmin);
router.delete('/deleteappointment/:id', verifyToken, isAdmin, adminAppointmentController.deleteAppointmentById);
router.get('/getappointment', verifyToken, isAdmin, adminAppointmentController.getAppointmentAdmin);

// ADMIN - EVENT
router.delete('/deleteevent/:id', verifyToken, isAdmin, adminEventController.deleteEventById);
router.post('/newevent', verifyToken, isAdmin, adminEventController.createEvent);

// ADMIN - ROLES
router.post('/newrole', verifyToken, isAdmin, adminRoleController.newRole);




module.exports = router;