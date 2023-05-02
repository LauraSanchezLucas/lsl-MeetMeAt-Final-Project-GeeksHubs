const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const userController = {};

// PROFILE
userController.profile = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId);

        return res.json({
            success: true,
            message: 'Access profile successfully',
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

// UPDATE MY OWN PROFILE
userController.updateProfile = async (req, res) => {
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
                password: encryptedPassword,
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
                message: 'Can not update user profile',
                error_message: error.message,
            })
        };

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
        })
    }
};
// FIND ALL USERS WITHOUT PROFESIONALS.
userController.findAllUsersProfesional = async (req, res) => {
    try {
        const user = await User.findAll({
            where: { role_id: 3 },
            attributes: {
                exclude: ['id', 'password', 'role_id', 'createdAt', 'updatedAt'],
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
// UPDATE USER BY ADMIN
userController.updateUserByAdmin = async (req, res) => {
    try {
        const { name, surname, phone, email, password, role_id } = req.body;
        const userId = req.params.id;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const existUser = await User.findOne({
            where: {
                id: userId
            }
        });
        if (!existUser) {
            return res.status(400).json({
                success: true,
                message: 'User not found',
            });
        };
        const updateProfile = await User.update(
            {
                name: name,
                surname: surname,
                phone: phone,
                email: email,
                password: encryptedPassword,
                role_id: role_id
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
        };

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
userController.findAllUsersAdmin = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
            include: [{
                model: Role,
                where: {
                    name: {
                        [Op.not]: 'admin'
                    }
                }
            }]
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
userController.deleteUserByAdmin = async (req, res) => {
    try {
        const user = req.params.id;
        
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
        };
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
userController.newUserByAdmin = async (req, res) => {
    try {
        const { name, surname, email, phone, password, role_id } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        if (role_id === 1) {
            return res.status(400).json({
                success: false,
                message: 'Admin cannot create an admin user',
            });
        };
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

module.exports = userController;
