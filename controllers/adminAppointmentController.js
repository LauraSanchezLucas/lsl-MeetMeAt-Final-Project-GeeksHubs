const { Appointment, User, Event } = require('../models');

const adminAppointmentController = {};

adminAppointmentController.createAppointmentAdmin = async(req, res) => {
    try {
        const { user_id, event_id, business_id } = req.body;

        const existAppointment = await Appointment.findOne({
            user_id: user_id,
            event_id: event_id
        });
        if(existAppointment){
            return res.status(400).json({
                success: true,
                message: 'Appointment already exists',
            })
        }

        const newAppointment = {
            user_id: user_id,
            event_id: event_id,
            business_id: business_id
        }
        const appointment = await Appointment.create(newAppointment);

        return res.json(
            {
                success: true,
                message: 'Registered appointment successfully',
                appointment: appointment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Something went wrong',
                error_message: error.message
            }
        )
    };
}

adminAppointmentController.deleteAppointmentById = async(req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy(
            {
                where:{
                    id: appointmentId
                }
            }
        )
        return res.json(
            {
                success: true,
                message: 'Appointment deleted',
                appointment: deleteAppointment
            }
        )
} catch (error) {
    return res.status(500).json(
        {
            success: false,
            message: 'Something went wrong',
            error_message: error.message
        }
    )
};
}

adminAppointmentController.getAppointmentAdmin = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                include:[
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "password", "role_id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                        model: Event,
                        attributes: {
                            exclude: ["id", "password", "role_id", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes:{
                exclude: ["id", "user_id", "event_id", "business_id", "createdAt", "updatedAt"]
            }
        }
        )
        return res.json(
            {
                success: true,
                message: 'Access appointments successfully',
                userAppointment: userAppointment
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Something went wrong',
                error_message: error.message
            }
        )
    };
    }


module.exports = adminAppointmentController;