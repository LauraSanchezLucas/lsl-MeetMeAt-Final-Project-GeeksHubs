const { Role, User } = require("../models");

const adminRoleController = {};

// Create new role.
adminRoleController.newRole = async (req, res) => {
  try {
    const { name } = req.body;
    // find if exist
    const existRole = await Role.findOne({
      where: {
        name: name,
      },
    });
    if (existRole) {
      return res.status(400).json({
        success: true,
        message: "Role already exists",
      });
    }
    // Create new role
    const newRole = {
      name,
    };
    const role = await Role.create(newRole);

    return res.json({
      success: true,
      message: "Role created successfully",
      role: role,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};

// Delete Role
adminRoleController.deleteRoleById = async (req, res) => {
  try {
    const RoleId = req.params.id;

    const existRole = await Role.findOne({
    where: {
        id: RoleId,
    },
    });
    if (!existRole) {
    return res.status(400).json({
        success: true,
        message: "Role not found",
    });
    }

    const deleteRole = await Role.destroy({
    where: {
        id: RoleId,
    },
    });
    return res.json({
        success: true,
        message: "Role deleted",
        deleteRole: deleteRole,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error_message: error.message,
    });
}
};

// adminRoleController.newUserRole = async(req, res) => {
//     try {
//        const { role_id, user_id } = req.body;

//        const newUserRole = {
//         user_id,
//         role_id
//        }

//        const userRole = await User.create(newUserRole)
//        return res.json(
//         {
//             success: true,
//             message: 'Registered role successfully',
//             userRole: userRole
//         }
//     )
//     } catch (error) {
//         return res.status(500).json(
//             {
//                 success: false,
//                 message: 'Something went wrong',
//                 error_message: error.message
//             }
//         )
//     };
//     }

adminRoleController.newUserRole = async (req, res) => {
  try {
    const { role_id } = req.body;
    const userId = req.params.id;

    const updateRole = await User.update(
      {
        role_id,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    if (!updateRole) {
      return res.send({
        success: false,
        message: "Can´t update user profile",
        error_message: error.message,
      });
    }
    return res.send({
      success: true,
      message: "Update user profile successfully",
      updateRole: updateRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};

// userController.updateProfile = async(req, res) => {
//     try {
//         const { name, surname, email, phone, password } = req.body;
//         const userId = req.userId;
//         const encryptedPassword = bcrypt.hashSync(password, 10);

//         const updateProfile = await User.update(
//             {
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 phone: phone,
//                 password: encryptedPassword
//             },
//             {
//                 where:{
//                     id: userId
//                 }
//             }
//         );

//         if(!updateProfile){
//             return res.send(
//                 {
//                 success: false,
//                 message: 'Can´t update user profile',
//                 error_message: error.message
//                 }
//             )
//         }
//         return res.send(
//             {
//             success: true,
//             message: 'Update user profile successfully',
//             updateProfile: updateProfile
//             }
//         )
//     } catch (error) {
//         return res.status(500).json(
//             {
//                 success: false,
//                 message: 'Something went wrong',
//                 error_message: error.message
//             }
//         )
//     }
// };

module.exports = adminRoleController;
