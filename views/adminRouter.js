const adminController = require('../controllers/adminController');
const verifyToken= require('../middleware/verifyToken');
const isAdmin= require('../middleware/isAdmin');

const router = require ('express').Router();

// ADMIN - USER
router.put('/updateuserprofile/:id', verifyToken, isAdmin, adminController.updateUserByAdmin)

// ADMIN - APPOINTMENTS



// ADMIN - BUSINESS


module.exports = router;