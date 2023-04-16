const { Event } = require('../models')

const adminEventController = {};

adminEventController.deleteEventById = async(req, res) => {
    try {
        const eventId = req.params.id;

        const deleteEvent = await Event.destroy(
            {
                where:{
                    id: eventId
                }
            }
        )
        return res.json(
            {
                success: true,
                message: 'Event deleted',
                deleteEvent: deleteEvent
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

adminEventController.createEvent = async (req, res) =>{
    try {
        const { name, description, place, date, hour } = req.body;
        const existEvent = await Event.findOne({
            where:{
                name: name,
            }
        
        });
        if(existEvent){
            return res.status(400).json({
                success: true,
                message: 'Event already exists',
            })
        }

        const newEvent = {
            name: name,
            description: description,
            place: place,
            date: date,
            hour: hour
        }
        const event = await Event.create(newEvent);

        return res.json(
            {
                success: true,
                message: 'Event created successfully',
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

module.exports = adminEventController;