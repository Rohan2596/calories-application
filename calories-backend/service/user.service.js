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
}
module.exports = new UserService();
