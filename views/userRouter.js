const userController = require('../controllers/userController');

const verifyToken = require('../middleware/verifyToken');
const isProfessional = require('../middleware/isProfessional');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile);
router.put('/update/profile', verifyToken, userController.updateProfile);

// PROFESSIONAL - USER
router.get('/getuserbyprofess', verifyToken, isProfessional, userController.findAllUsersProfesional);

// ADMIN - USER
router.put('/updateuserprofile/:id', verifyToken, isAdmin, userController.updateUserByAdmin);
router.get('/allusers', verifyToken, isAdmin, userController.findAllUsersAdmin);
router.delete('/cancelluser/:id', verifyToken, isAdmin, userController.deleteUserByAdmin);
router.post('/newuseradmin', verifyToken, isAdmin, userController.newUserByAdmin);
router.get('/getprofessional', verifyToken, isAdmin, userController.findUsersProfesional);

module.exports = router;