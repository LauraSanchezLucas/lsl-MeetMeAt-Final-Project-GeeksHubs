const router = require("express").Router();

const authRoutes = require("./views/authRouter");
const userRoutes = require("./views/userRouter");
const businessRoutes = require("./views/businessRouter");
const eventRoutes = require("./views/eventRouter");
const specialtyRoutes = require("./views/specialtyRouter");
const appointmentRoutes = require("./views/appointmentRouter");
const roleRoutes = require("./views/roleRouter");

router.use("/", authRoutes);
router.use("/", userRoutes);
router.use("/", businessRoutes);
router.use("/", eventRoutes);
router.use("/", specialtyRoutes);
router.use("/", appointmentRoutes);
router.use("/", roleRoutes);


module.exports = router;
