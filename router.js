const router = require("express").Router();

const authRoutes = require("./views/authRouter");
const userRoutes = require("./views/userRouter");
const adminRoutes = require("./views/adminRouter");
const professionalRoutes = require("./views/professionalRouter");
const businessRoutes = require("./views/businessRouter");
const eventRoutes = require("./views/eventRouter");
const specialtyRoutes = require("./views/specialtyRouter");


router.use("/", authRoutes);
router.use("/", userRoutes);
router.use("/", adminRoutes);
router.use("/", professionalRoutes);
router.use("/", businessRoutes);
router.use("/", eventRoutes);
router.use("/", specialtyRoutes);




module.exports = router;
