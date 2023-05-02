const { Op } = require("sequelize");
const { Role, User } = require("../models");

const roleController = {};

// CREATE NEW ROLE
roleController.newRole = async (req, res) => {
  try {
    const { name } = req.body;

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
    };
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
roleController.deleteRoleById = async (req, res) => {
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
    };
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
// UPDATE ROLE
roleController.updateRole = async (req, res) => {
  try {
    const { name } = req.body;
    const roleId = req.params.id;

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
    };
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
    };

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
// SEE ALL ROLES.
roleController.getAllRoles = async (req, res) => {
  try {
    const role = await Role.findAll({
      include: [
        {
          model: User,
          attributes: {
            exlude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return res.json({
      success: true,
      message: "Access successfully",
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
// SEE ALL ROLES EXCLUDE ADMIN.
roleController.getAllRolesNotAdmin = async (req, res) => {
  try {
    const role = await Role.findAll({
      where: {
        id: {
          [Op.ne]: 1,
        },
      },
      include: [
        {
          model: User,
          attributes: {
            exlude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return res.json({
      success: true,
      message: "Access successfully",
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


module.exports = roleController;
