const isProfessional = (req, res, next) =>{
    try {
        if (req.roleId !== 2){
          return res.status.json(
            {
              success: false,
              message: 'Wrong Credentials',
            }
          );
        }
        next();
      } catch (error) {return res.status(500).json(
        {
              success: false,
              message: "Somenthing went wrong",
              error_message: error.message
          }
      )
      }
    }
    
    
    module.exports = isProfessional;
