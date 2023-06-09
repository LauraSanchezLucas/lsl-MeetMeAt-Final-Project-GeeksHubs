const specialtyController = require('../controllers/specialtyController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

// ADMIN - SPECIALTY
router.get('/specialty', verifyToken, isAdmin, specialtyController.findAllSpecialty);

module.exports = router;