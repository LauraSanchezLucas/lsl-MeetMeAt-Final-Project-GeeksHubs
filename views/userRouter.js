const userController = require('../controllers/userController');
const verifyToken= require('../middleware/verifyToken')

const router = require ('express').Router();

// USER
router.get('/profile', verifyToken, userController.profile)



module.exports = router;