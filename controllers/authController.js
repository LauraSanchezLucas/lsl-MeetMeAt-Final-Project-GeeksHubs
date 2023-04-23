const { User } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

// LOGIN
authController.login = async (req, res) => {
try {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email: email,
        },
    });
    if (!user) {
        return res.json({
            success: true,
            message: 'Unfortunately we do not recognise those details',
        })
    };
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.json({
            success: true,
            message: 'Unfortunately we do not recognise those details',
        })
    };

    const token = jwt.sign(
    {
        userId: user.id,
        email: user.email,
        surname: user.surname,
        phone: user.phone,
        roleId: user.role_id,
        name: user.name,
    },
    'secreto',
    { expiresIn: '2h' }
    );
    return res.json({
        success: true,
        message: 'Login successfully',
        token: token,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Somenthing went wrong',
        error: error.message,
    });
}
};

// REGISTER
authController.register = async (req, res) => {
try {
    const { name, surname, email, phone, password } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        password: encryptedPassword,
        role_id: 3,
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

module.exports = authController;
