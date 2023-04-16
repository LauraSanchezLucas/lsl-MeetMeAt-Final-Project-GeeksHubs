const { Business, User, Specialty } = require('../models');

const businessController = {};

businessController.getAllBusiness = async (req, res) => {
    try {
        const business = await Business.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: {
                            exlude: ["id", "createAt", "updatedAt"]
                        }
                    },
                    {
                        model: Specialty,
                        attributes:{
                            exlude:["id", "createdAt", "updatedAt"]
                        }
                    },
                ]
            }
        )
        return res.json(
            {
                success: true,
                message: 'access successfully',
                business: business
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

module.exports = businessController;