const { Business, User, Specialty } = require("../models");

const businessController = {};

// GET ALL BUSINESS.
businessController.getAllBusiness = async (req, res) => {
try {
    const business = await Business.findAll({
    include: [
        {
        model: Specialty,
        attributes: {
            exlude: ['id','createdAt','updatedAt'],
        },
        },
    ],
    attributes: {
        exclude: ['id','email','phone','notes','user_id','specialty_id','createdAt','updatedAt'],
    },
    });
    return res.json({
        success: true,
        message: 'Access successfully',
        business: business,
    });
}catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};

module.exports = businessController;
