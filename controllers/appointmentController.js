const { Appointment } = require('../models');

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
                message: 'Registeres appointment successfully',
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

module.exports = appointmentController;