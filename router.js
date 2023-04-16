const router = require('express').Router();

const authRoutes = require('./views/authRouter');
const userRoutes = require('./views/userRouter');
const adminRoutes = require('./views/adminRouter');


router.use('/', authRoutes);
router.use('/', userRoutes);
router.use('/', adminRoutes);



module.exports = router;