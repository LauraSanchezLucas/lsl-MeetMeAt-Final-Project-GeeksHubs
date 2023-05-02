const { Appointment, User, Event } = require("../models");

const adminAppointmentController = {};

//CREATE APPOINTMENT BY ADMIN
adminAppointmentController.createAppointmentAdmin = async (req, res) => {
    try {
        const { user_id, event_id } = req.body;
 
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
                user_id: user_id,
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
            user_id: user_id,
            event_id: event_id,
        };
        const appointment = await Appointment.create(newAppointment);

        return res.json({
            success: true,
            message: 'Registered appointment successfully',
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
//DELETE APPOINTMENT
adminAppointmentController.deleteAppointmentById = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy({
            where: {
                id: appointmentId,
            },
        });
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
//GET ALL APPOINTMENTS
adminAppointmentController.getAppointmentAdmin = async (req, res) => {
    try {
        const userAppointment = await Event.findAll({
            include: [
                {
                    model: Appointment,
                    include: [
                        {
                            model: User,
                            attributes: {
                                exclude: ['password', 'role_id', 'createdAt', 'updatedAt'],
                            },
                        },
                    ],
                },
            ],
            attributes: {
                exclude: ['password', 'role_id', 'createdAt', 'updatedAt'],
            },
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

module.exports = adminAppointmentController;
