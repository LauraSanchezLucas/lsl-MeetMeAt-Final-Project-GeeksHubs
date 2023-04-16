const { User } = require('../models');
const bcrypt = require('bcrypt');

const adminController = {};

adminController.updateUserByAdmin = async(req, res) => {
    try {
        const { name, surname, phone } = req.body;
        const userId = req.params.id;


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


module.exports = adminController;