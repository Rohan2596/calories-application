class UserService {

    addUser = (req, next) => {
        try {
            let user = {
                "firstName": req.firstName,
                "lastName": req.lastName,
                "email": req.email,
                "mobile": req.mobile,
                "password": req.password
            }
            console.log("Inside User Service",user);
        } catch (error) {
            next(error)
        }
    };
    authUser=(req,next)=>{
        try {
            let auth = {
                "email": req.email,
                "password": req.password
            }
            console.log("Inside User Service",auth);
        } catch (error) {
            next(error)
        }
    };
    getUser=(req,next)=>{
        try {
            let token = req
            console.log("Inside User Service",token);
        } catch (error) {
            next(error)
        }
    };
    getAllUser=(next)=>{
        try {
            console.log("Inside User Service","ALLL");
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserService();
