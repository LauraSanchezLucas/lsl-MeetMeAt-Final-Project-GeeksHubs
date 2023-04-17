const { User, Appointment, Event, Sequelize } = require('../models');
const { Op } = require('sequelize');

const professionalController = {};

professionalController.getAppointmentProfessional = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                include:[
                    {
                        model: User,
                        attributes: {
                            exclude: 
                            ["id", "password", "role_id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                        model: Event,
                        attributes:{
                            exclude:["id", "createdAt", "updatedAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["id", "user_id", "event_id", "business_id", "createdAt", "updatedAt"],
                },
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


module.exports = professionalController;