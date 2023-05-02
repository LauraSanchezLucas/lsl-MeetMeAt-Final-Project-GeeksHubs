const businessController = require('../controllers/businessController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


// USER - BUSINESS
router.get('/business', businessController.getAllBusiness);

// ADMIN - BUSINESS
router.post('/newbusiness', verifyToken, isAdmin, businessController.createBusiness);
router.delete('/deletebusiness/:id', verifyToken, isAdmin, businessController.deleteBusinessById);

module.exports = router;