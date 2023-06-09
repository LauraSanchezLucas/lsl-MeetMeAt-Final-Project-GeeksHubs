const { Appointment, Event } = require("../models");

const userAppointmentController = {};

// CREATE APPOINTMENT TO EVENT
userAppointmentController.createAppointment = async (req, res) => {
    try {
        const { event_id } = req.body;
        const userId = req.userId;

        const existEvent = await Event.findOne({
            where: {
                id: event_id
            }
        });
        if (!existEvent) {
            return res.status(400).json({
                success: true,
                message: 'This event not found',
            });
        };
        const existAppointment = await Appointment.findOne({
            where: {
                user_id: req.userId,
                event_id: event_id
            },
        });
        if (existAppointment) {
            return res.status(400).json({
                success: true,
                message: 'User already has an appointment for this event',
            });
        };
        const newAppointment = {
            user_id: userId,
            event_id: event_id,
        };
        const appointment = await Appointment.create(newAppointment);

        return res.json({
            success: true,
            message: 'Appointment registered successfully',
            appointment: appointment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
};
// SEE ALL MY APPOINTMENTS
userAppointmentController.getAppointment = async (req, res) => {
    try {
        const userAppointment = await Appointment.findAll({
            where: {
                user_id: req.userId,
            },
            include: [
                {
                    model: Event,
                    attributes: {
                        exclude: ['id', 'description', 'business_id', 'createdAt', 'updatedAt'],
                    },
                },
            ],
            attributes: {
                exclude: ['user_id', 'business_id', 'event_id', 'createdAt', 'updatedAt'],
            },
            order: [[{ model: Event }, 'date', 'ASC']]
        });

        return res.json({
            success: true,
            message: 'Access appointments successfully',
            userAppointment: userAppointment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
};
// DELETE APPOINTMENT BY ID
userAppointmentController.deleteAppointmentById = async (req, res) => {
    try {
        const appointment = req.params.id;

        const deleteAppointment = await Appointment.findOne({
            where: {
                user_id: req.userId,
                id: appointment,
            },
        });
        if (!deleteAppointment) {
            return res.json({
                success: true,
                message: 'Appointment not found',
                appointment: deleteAppointment,
            });
        };
        await deleteAppointment.destroy();

        return res.json({
            success: true,
            message: 'Appointment deleted',
            appointment: deleteAppointment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
};

module.exports = userAppointmentController;