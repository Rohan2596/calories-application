const response={};
class UserController {

    userRegister = (req, res) => {
        try {
            response.success=true;
            response.message="User Registration Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="User Registration Failed.";
            res.status(500).send(response);
        
        }
    };
    userLogin=(req,res)=>{
        try {
            response.success=true;
            response.message="User Login Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="User Login Failed.";
            res.status(500).send(response);
        
        }
    };
    userDetails=(req,res)=>{
        try {
            response.success=true;
            response.message="User Details Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="User Details Failed.";
            res.status(500).send(response);
        
        }
    };
    getAllUser=(req,res)=>{
        try {
            response.success=true;
            response.message="Get All User Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="Get All User Failed.";
            res.status(500).send(response);
        
        }
    };
    forgotPassword=(req,res)=>{
        try {
            response.success=true;
            response.message="Password Forgot Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="Password Forgot Failed.";
            res.status(500).send(response);
        
        }
    };
    resetPassword=(req,res)=>{
        try {
            response.success=true;
            response.message="Password Reset Success.";
           res.status(200).send(response);
        } catch (error) {

            response.success=false;
            response.message="Password Reset Failed.";
            res.status(500).send(response);
        
        }
    }

}
module.exports = new UserController();
