const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

// LOGIN
authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne(
            {
        where: {
            email: email,
        },
        });
        if (!user) {
        return res.send('Unfortunately we do not recognise those details');
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
        return res.send('Unfortunately we do not recognise those details');
        }
        const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            roleId: user.role_id,
            name: user.name
        },
        'secreto',
        { expiresIn: '2h' }
        );
        return res.json(
            {
            success: true,
            message: 'Login successfully',
            token: token
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
            success: false,
            message: 'Somenthing went wrong',
            error: error.message
        }
    )
    }
};




module.exports = authController;
