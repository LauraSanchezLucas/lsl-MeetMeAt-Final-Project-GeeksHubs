const router = require('express').Router();

const authRoutes = require('./views/authRouter');
const userRoutes = require('./views/userRouter');


router.use('/', authRoutes);
router.use('/', userRoutes);


module.exports = router;