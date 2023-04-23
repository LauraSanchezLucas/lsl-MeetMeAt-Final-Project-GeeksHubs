const { where } = require("sequelize");
const { User, Appointment, Event, Business } = require("../models");

const professionalController = {};

// SEE MY BUSINESS`S APPOINTMENTS
professionalController.getAppointmentProfessional = async (req, res) => {
// try {
//     const businessId = req.params.id;
//     const business = await Business.findByPk(businessId);
//     if(!business){
//         return res.status(400).json({
//                     success: true,
//                     message: 'Business not exist',
//                 }); 
//     }
//     const events = await Event.findAll({
//         where: {
//             business_id: businessId
//         },
//         include: [{
//             model: Appointment,
//             // include: [{
//             //     model: Event,
//             //     include:[{
//             //         model: Business, 
//             //         where:{
//             //         id: businessId
//             //     }
//             //     }]
//             // }]
//         }]
//     });

    
//     return res.status(200).json({
//         success: true,
//         message: 'Access appointments successfully',
//         events: events,
//     });
// }catch (error) {
//     return res.status(500).json({
//         success: false,
//         message: 'Something went wrong',
//         error_message: error.message,
//     });
// }
// };

try {
    const userId = req.userId;
    const business = await Business.findOne({
        where: {user_id: userId},
        include:{
            model: Event,
            include:{
                model: Appointment,
                include:{
                    model:User
                }
                }
            }
        }

    );
    if(!business){
        return res.status(400).json({
                    success: true,
                    message: 'Business not exist',
                }); 
    }


    return res.status(200).json({
        success: true,
        message: 'Access appointments successfully',
        events: business.Events,
    });
}catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};
// FIND ALL USERS WITHOUT PROFESIONALS.
professionalController.findAllUsersProfesional = async (req, res) => {
try {
    const user = await User.findAll({
    where: { role_id: 3 },
    attributes: {
        exclude: ['id','password','role_id','createdAt','updatedAt'],
    },
    });

    return res.send({
        success: true,
        message: 'Access profiles successfully',
        user: user,
    });
}catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error_message: error.message,
    });
}
};

module.exports = professionalController;
