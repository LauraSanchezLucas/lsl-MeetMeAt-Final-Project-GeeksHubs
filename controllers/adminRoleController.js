const { Role, User } = require("../models");

const adminRoleController = {};

// CREATE NEW ROLE
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

// DELETE ROLE
adminRoleController.deleteRoleById = async (req, res) => {
  try {
    const RoleId = req.params.id;
    // Check if role exist
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
    // delete role
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

// ALLOCATE ROLE TO USER
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

// UPDATE ROLE
adminRoleController.updateRole = async (req, res) => {
  try {
    const { name } = req.body;
    const roleId = req.params.id;
  // Check if exist role
    const existRole = await Role.findOne({
      where: {
        id: roleId,
      },
    });
    if (!existRole) {
      return res.status(400).json({
        success: true,
        message: "Role not found",
      });
    }
    // Update role
    const updateRole = await Role.update(
      {
        name: name,
      },
      {
        where: {
          id: roleId,
        },
      }
    );

    if (!updateRole) {
      return res.send({
        success: false,
        message: "Can´t update Role",
        error_message: error.message,
      });
    }
    return res.send({
      success: true,
      message: "Update role successfully",
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

module.exports = adminRoleController;
