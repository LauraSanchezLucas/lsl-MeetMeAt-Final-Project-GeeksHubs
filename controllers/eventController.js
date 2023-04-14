const { Event, User } = require('../models');

const eventController ={};

eventController.getAllEvents = async(req, res) => {
    try {

        const event = await Event.findAll()

        return res.json(
            {
                success: true,
                message: 'access successfully',
                event: event
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

module.exports = eventController;