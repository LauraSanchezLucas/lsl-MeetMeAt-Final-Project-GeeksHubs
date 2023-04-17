const { User, Appointment } = require('../models');
const bcrypt = require('bcrypt');

const adminController = {};

adminController.updateUserByAdmin = async(req, res) => {
    try {
        const { name, surname, phone } = req.body;
        const userId = req.userId;

        const updateProfile = await User.update(
            {
                name: name,
                surname: surname,
                phone: phone,
            },
            {
                where:{
                    id: userId
                }
            }
        );

        if(!updateProfile){
            return res.send(
                {
                success: false,
                message: 'Can´t update user profile',
                error_message: error.message
                }
            )
        }
        return res.send(
            {
            success: true,
            message: 'Update user profile successfully',
            updateProfile: updateProfile
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
    }
};

adminController.findAllUsersAdmin = async(req, res) => {
    try {
        const user = await User.findAll(
        {
            attributes: {
                exclude: ["id", "password", "createdAt", "updatedAt"]
            }
        }
        );
        return res.send(
            {
            success: true,
            message: 'Access profiles successfully',
            user: user
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
    }
};

adminController.deleteUserByAdmin = async(req, res) => {
    try {
        const user = req.params.id;

        // Find and delete all appointments from that user
        await Appointment.destroy({
            where:{
                user_id: user
            }
        })
        const deleteUser = await User.destroy(
            {
                where:{
                    id:user
                }
            }
        )
        return res.send(
            {
            success: true,
            message: 'User deleted successfully',
            deleteUser: deleteUser
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
    }
};


module.exports = adminController;