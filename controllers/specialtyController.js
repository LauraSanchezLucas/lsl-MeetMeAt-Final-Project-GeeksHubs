const { Specialty } = require("../models");

const specialtyController = {};

// FIND ALL SPECIALTY BY ADMIN
specialtyController.findAllSpecialty = async (req, res) => {
    try {
        const specialty = await Specialty.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
        });
        
        return res.send({
            success: true,
            message: 'Access specialty successfully',
            specialty: specialty,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };

    module.exports = specialtyController;