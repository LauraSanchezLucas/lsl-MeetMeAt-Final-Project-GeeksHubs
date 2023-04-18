const { Event } = require("../models");

const eventController = {};

eventController.getAllEvents = async (req, res) => {
try {
    const event = await Event.findAll({
    attributes: {
        exclude: ['id', 'business_id', 'createdAt', 'updatedAt'],
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

module.exports = eventController;
