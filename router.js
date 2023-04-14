const router = require('express').Router();

const authRoutes = require('./views/authRouter');

router.use('/', authRoutes);

module.exports = router;