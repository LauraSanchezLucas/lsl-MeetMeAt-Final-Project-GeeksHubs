const { Event, Business, User } = require("../models");


const eventController = {};

// GET ALL EVENTS.
eventController.getAllEvents = async (req, res) => {
try {
    const event = await Event.findAll({
    attributes: {
        exclude: ['business_id', 'createdAt', 'updatedAt'],
    },
    });
    return res.json({
        success: true,
        message: 'Access successfully',
        event: event,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};
// DELETE EVENT 
eventController.deleteEventById = async (req, res) => {
    try {
        const eventId = req.params.id;
        const existEvent = await Event.findOne({
            where: {
                id: eventId,
            },
            });
            if (!existEvent) {
            return res.status(400).json({
                success: true,
                message: 'Event not found',
            });
            }
        const deleteEvent = await Event.destroy({
        where: {
            id: eventId,
        },
        });
        return res.json({
            success: true,
            message: 'Event deleted',
            deleteEvent: deleteEvent,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };
    
    // CREATE EVENT.
   eventController.createEvent = async (req, res) => {
    try {
        const { name, description, place, date, hour, business_id } = req.body;
        const existEvent = await Event.findOne({
        where: {
            name: name,
        },
        });
        if (existEvent) {
        return res.status(400).json({
            success: true,
            message: 'Event already exists',
        });
        }
        const existBusiness = await Business.findOne({
            where: {
                id: business_id,
            },
            });
            if (!existBusiness) {
            return res.status(400).json({
                success: true,
                message: 'Business not found',
            });
            }
    
        const newEvent = {
            name: name,
            description: description,
            place: place,
            date: date,
            hour: hour,
            id: business_id
        };
        const event = await Event.create(newEvent);
    
        return res.json({
            success: true,
            message: 'Event created successfully',
            event: event,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };


    // CREATE EVENT BY PROFESIONAL

    eventController.createEventProfessional = async (req, res) => {
        try {
            const { name, description, place, date, hour } = req.body;
            const business = await Business.findOne({
            where: {
                user_id: req.userId,
            },
            include:{
                model: User,
                attributes:[ 'name'],

            }
            });
            if (!business) {
            return res.status(400).json({
                success: true,
                message: 'Business not found',
            });
            }
            const existEvent = await Event.findOne({
                where: {
                    name: name,
                    business_id: business.id,
                },
                });
                if (existEvent) {
                return res.status(400).json({
                    success: true,
                    message: 'Event already exist',
                });
                }
        
            const newEvent = {
                name: name,
                description: description,
                place: place,
                date: date,
                hour: hour,
                business_id:business.id
            };
            
            const event = await Event.create(newEvent);
        
            return res.json({
                success: true,
                message: 'Event created successfully',
                event: event,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error_message: error.message,
            });
        }
        };

    // GET ALL EVENTS BY PROFESSIONAL.
    eventController.getAllEventsProfessional = async (req, res) => {
    try {
        const userId = req.userId
        
        const business = await Business.findOne({
            where:{
                user_id: userId
            }
            });


        const events = await Event.findAll({
        where:{
            business_id: business.id},
            attributes:{
                exclude:['business_id', 'createdAt', 'updatedAt'],
            }
        });
        return res.json({
            success: true,
            message: 'Access successfully',
            event: events,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };

    // DELETE EVENT BY PROFESSIONAL
    eventController.deleteEventByProfessionalById = async (req, res) => {
        try {
            const eventId = req.params.id;
            const businessId = req.userId;
            const existEvent = await Event.findOne({
                where: {
                    id: eventId,
                    business_id: businessId
                },
                });
                if (!existEvent) {
                return res.status(400).json({
                    success: true,
                    message: 'Event not found',
                });
                }
            const deleteEvent = await Event.destroy({
            where: {
                id: eventId,
                business_id: businessId
            },
            });
            return res.json({
                success: true,
                message: 'Event deleted',
                deleteEvent: deleteEvent,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error_message: error.message,
            });
        }
        };

module.exports = eventController;
