const roleController = require('../controllers/roleController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


// ADMIN - ROLES
router.post('/newrole', verifyToken, isAdmin, roleController.newRole);
router.delete('/deleterole/:id', verifyToken, isAdmin, roleController.deleteRoleById);
router.put('/updateuserrole/:id', verifyToken, isAdmin, roleController.updateRole);
router.get('/role', verifyToken, isAdmin, roleController.getAllRoles);
router.get('/roles', verifyToken, isAdmin, roleController.getAllRolesNotAdmin);

module.exports = router;