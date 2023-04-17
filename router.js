const router = require('express').Router();

const authRoutes = require('./views/authRouter');
const userRoutes = require('./views/userRouter');
const adminRoutes = require('./views/adminRouter');
const professionalRoutes = require('./views/professionalRouter');


router.use('/', authRoutes);
router.use('/', userRoutes);
router.use('/', adminRoutes);
router.use('/', professionalRoutes);



module.exports = router;