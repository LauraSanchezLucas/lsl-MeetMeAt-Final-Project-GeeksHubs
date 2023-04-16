const { Role } = require('../models');

const adminRoleController = {};

adminRoleController.newRole = async(req, res) => {
    try {
        const { name } = req.body;

        const newRole ={
            name
        }
        const role = await Role.create(newRole);

    return res.json(
            {
                success: true,
                message: 'Role created successfully',
                role: role
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
};
}
adminRoleController.deleteRoleById = async(req, res) => {
    try {
        const RoleId = req.params.id;

        const deleteRole = await Role.destroy(
            {
                where:{
                    id: RoleId
                }
            }
        )
        return res.json(
            {
                success: true,
                message: 'Role deleted',
                deleteRole: deleteRole
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
};
}



module.exports = adminRoleController;