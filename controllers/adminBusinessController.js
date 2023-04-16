const { Business, User, Role } = require('../models')

const adminBusinessController = {};

// adminBusinessController.deleteEventById = async(req, res) => {
//     try {
//         const eventId = req.params.id;

//         const deleteEvent = await Event.destroy(
//             {
//                 where:{
//                     id: eventId
//                 }
//             }
//         )
//         return res.json(
//             {
//                 success: true,
//                 message: 'Event deleted',
//                 deleteEvent: deleteEvent
//             }
//         )
// } catch (error) {
//     return res.status(500).json(
//         {
//             success: false,
//             message: 'Something went wrong',
//             error_message: error.message
//         }
//     )
// };
// }

adminBusinessController.createBusiness = async (req, res) =>{
    try {
        const { user_id, specialty_id, name, email, phone, notes } = req.body;
        const existBusiness = await Business.findOne({
            where:{
                name: name,
            }
        
        });
        if(existBusiness){
            return res.status(400).json({
                success: true,
                message: 'Business already exists',
            })
        }

        const user = await User.findOne({
            where: { 
                id: user_id
            },
            include:{
                model: Role
            }
        })

        const role_id = user.Role?.id;
        if( role_id !== 2){
            return res.status(400).json({
                success: false,
                message: 'User must be Profesional',
            })
        }
        const newBusiness = {
            user_id: user_id,
            specialty_id: specialty_id,
            name: name,
            email: email,
            phone: phone,
            notes: notes,
            role_id: 2
        }
        const business = await Business.create(newBusiness);

        return res.json(
            {
                success: true,
                message: 'Business created successfully',
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

module.exports = adminBusinessController;