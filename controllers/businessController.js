const { Business, User, Specialty, Role } = require("../models");

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
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};

// DELETE BUSINESS
businessController.deleteBusinessById = async (req, res) => {
try {
    const businessId = req.params.id;

    const deleteBusiness = await Business.destroy({
    where: {
        id: businessId,
    },
    });
    return res.json({
        success: true,
        message: "Event deleted",
        deleteBusiness: deleteBusiness,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error_message: error.message,
    });
}
};

// CREATE BUSINESS
businessController.createBusiness = async (req, res) => {
try {
    const { user_id, specialty_id, name, email, phone, notes } = req.body;
    // Check if business already exist
    const existBusiness = await Business.findOne({
    where: {
        name: name,
    },
    });
    if (existBusiness) {
    return res.status(400).json({
        success: true,
        message: 'Business already exists',
    });
    }
    // Check user is business
    const user = await User.findOne({
    where: {
        id: user_id,
    },
    include: {
        model: Role,
    },
    });

    const role_id = user.Role.id;
    if (role_id !== 2) {
    return res.status(400).json({
        success: false,
        message: 'User must be Profesional',
    });
    }
    const newBusiness = {
        user_id: user_id,
        specialty_id: specialty_id,
        name: name,
        email: email,
        phone: phone,
        notes: notes,
        role_id: 2,
    };
    const business = await Business.create(newBusiness);

    return res.json({
        success: true,
        message: 'Business created successfully',
        business: business,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};
module.exports = businessController;
