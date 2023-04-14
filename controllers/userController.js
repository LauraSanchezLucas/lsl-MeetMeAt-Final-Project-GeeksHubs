const { User } = require('../models');
const bcrypt = require('bcrypt');


const userController = {};

userController.profile = async(req, res) => {
    try {

        const user = await User.findByPk(req.userId);

        return res.json(
            {
                success: true,
                message: 'access profile successfully',
                user: user
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

userController.updateProfile = async(req, res) => {
    try {
        const { name, surname, email, phone, password } = req.body;
        const userId = req.userId;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateProfile = await User.update(
            {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                password: encryptedPassword
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

module.exports = userController;