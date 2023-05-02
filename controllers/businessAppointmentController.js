const { User, Appointment, Event, Business } = require("../models");

const businessAppointmentController = {};

// SEE MY BUSINESS`S APPOINTMENTS
businessAppointmentController.getAppointmentProfessional = async (req, res) => {
    try {
        const userId = req.userId;

        const business = await Business.findOne({
            where: { user_id: userId },
            include: {
                model: Event,
                include: {
                    model: Appointment,
                    include: {
                        model: User
                    }
                },
            }
        });
        if (!business) {
            return res.status(400).json({
                success: true,
                message: 'Business not exist',
            });
        };

        return res.status(200).json({
            success: true,
            message: 'Access appointments successfully',
            events: business.Events,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
};


module.exports = businessAppointmentController;
