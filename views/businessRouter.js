const businessController = require('../controllers/businessController');

const router = require ('express').Router();


// USER - BUSINESS
router.get('/business', businessController.getAllBusiness);

module.exports = router;