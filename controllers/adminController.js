const { User, Appointment } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminController = {};

// UPDATE USER BY ADMIN
adminController.updateUserByAdmin = async (req, res) => {
try {
    const { name, surname, phone, email, password } = req.body;
    const userId = req.params.id;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    // check if user exist
    const existUser = await User.findOne({
        where:{
            id: userId
        }
    })
    if (!existUser) {
        return res.status(400).json({
            success: true,
            message: 'User not found',
        });
    }
    // update user
    const updateProfile = await User.update(
    {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        password: encryptedPassword
    },
    {
        where: {
        id: userId,
        },
    }
    );

    if (!updateProfile) {
    return res.send({
        success: false,
        message: 'Can´t update user profile',
        error_message: error.message,
    });
    }
    return res.send({
        success: true,
        message: 'Update user profile successfully',
        updateProfile: updateProfile,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};

// FIND ALL USERS BY ADMIN
adminController.findAllUsersAdmin = async (req, res) => {
try {
    const user = await User.findAll({
    attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
    },
    });
    return res.send({
        success: true,
        message: 'Access profiles successfully',
        user: user,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};
// DELETE USER BY ADMIN
adminController.deleteUserByAdmin = async (req, res) => {
    try {
        const user = req.params.id;
        // Check if user exist
        const deleteUsers = await User.findOne({
        where: {
            id: user,
        },
        });
    
        if (!deleteUsers) {
        return res.json({
            success: true,
            message: 'User not found',
            user: deleteUsers,
        });
        }
        const deleteUser = await User.destroy({
        where: {
            id: user,
        },
        });
        return res.send({
            success: true,
            message: 'User deleted successfully',
            deleteUser: deleteUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };

// CREATE USER BY ADMIN
adminController.newUserByAdmin = async (req, res) => {
    try {

        const { name, surname, email, phone, password, role_id } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            password: encryptedPassword,
            role_id: role_id,
        };
    
        const user = await User.create(newUser);
        return res.json({
            success: true,
            message: 'Registered user successfully',
            user: user,
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'Something went wrong',
            error_message: error.message,
        });
    }
    };  

module.exports = adminController;
