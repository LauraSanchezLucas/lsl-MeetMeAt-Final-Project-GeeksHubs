const { User } = require('../models');


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
                success: true,
                message: 'Something went wrong',
                error_message: error.message
            }
        )
        
    };
}

module.exports = userController;