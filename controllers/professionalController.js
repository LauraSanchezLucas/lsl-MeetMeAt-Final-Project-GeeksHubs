const { User, Appointment, Event, Business } = require("../models");

const professionalController = {};

// SEE MY BUSINESS`S APPOINTMENTS
professionalController.getAppointmentProfessional = async (req, res) => {
try {
    const businessId = req.params.id;
    const business = await Business.findByPk(businessId);
    if(!business){
        return res.status(400).json({
                    success: true,
                    message: 'Business not exist',
                }); 
    }
    const events = await Event.findAll({
        where: {
            business_id: businessId
        },
        include: [{
            model: Appointment,
            // include: [{
            //     model: Event,
            //     include:[{
            //         model: Business, 
            //         where:{
            //         id: businessId
            //     }
            //     }]
            // }]
        }]
    });

    // const userCitas = await Appointment.findAll(
    //     {
    //         where: {
    //             user_id: req.userId
    //         },
    //         include: [
    //             Service,
    //             {
    //                 model: User,
    //                 attributes: {
    //                     exclude: ["password", "role_id", "createdAt", "updatedAt"]
    //                 },
    //             },
    //         ],
    //         attributes: {
    //             exclude: ["user_id", "doctor_id", "service_id"]
    //         }
    //     }
    // )
    // const userAppointment = await Appointment.findAll({
    // include: [
    //     {
    //     model: User,
    //     attributes: {
    //         exclude: ['id','password','role_id','createdAt','updatedAt'],
    //     },
    //     },
    //     {
    //     model: Event,
    //     attributes: {
    //         exclude: ['id','createdAt','updatedAt'],
    //     },
    //     },
    // ],

    // attributes: {
    //     exclude: ['id','user_id','event_id','business_id','createdAt','updatedAt'],
    // },
    // });
    return res.status(200).json({
        success: true,
        message: 'Access appointments successfully',
        events: events,
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
