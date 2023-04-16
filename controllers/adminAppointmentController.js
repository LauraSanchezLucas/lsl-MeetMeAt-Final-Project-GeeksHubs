const { Appointment } = require('../models');

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


module.exports = adminAppointmentController;