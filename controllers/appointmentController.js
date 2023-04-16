const { Appointment, Business, User, Event } = require('../models');

const appointmentController = {};

appointmentController.createAppointment = async (req, res) =>{
    try {
        const { user_id, event_id, business_id } = req.body;
        const userId = req.userId;

        const newAppointment = {
            user_id: userId,
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

appointmentController.getAppointment = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where:{
                    user_id: req.userId
                },
                include:[
                    {
                        model: Business,
                        attributes:{
                            exclude: ["id", "user_id", "name", "email", "phone", "notes", "specialty_id", "createdAt", "updatedAt"]
                        },
                        include:{
                            model: User,
                            attributes: {
                                exclude: ["id", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                    {
                        model: Event,
                        attributes:{
                            exclude: ["id", "description",  "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes:{
                    exclude: ["id", "user_id", "business_id", "event_id", "createdAt", "updatedAt"]
                }
            }
        )
        return res.json(
            {
                success: true,
                message: 'Access appointments successfully',
                userAppointment: userAppointment
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
appointmentController.deleteAppointmentById = async(req, res) =>{
    try {
        const appointment = req.params.id;

        const deleteAppointment = await Appointment.findOne(
            {
                where:{
                    user_id: req.userId,
                    id:appointment
                }
            }
        )

        if(!deleteAppointment){
            return res.json(
                {
                    success: true,
                    message: 'Appointment not found',
                    appointment: deleteAppointment
                }
            );
            }
        await deleteAppointment.destroy();
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



module.exports = appointmentController;