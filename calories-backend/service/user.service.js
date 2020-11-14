const userModel = require('../model/user.model');
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
            return userModel.register(user).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    authUser = (req, next) => {
        try {
            let auth = {
                "email": req.email,
                "password": req.password
            }
            return userModel.login(auth).then((data) => {
                console.log(data);
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    getUser = (req, next) => {
        try {
            let token = req
            return userModel.getUserDetails(token).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    getAllUser = (next) => {
        try {
            console.log("Inside User Service", "ALLL");
        } catch (error) {
            next(error)
        }
    };
    forgotPassword = (req, next) => {
        try {
            let email = req
            console.log("Inside User Service", email);

        } catch (error) {
            next(error)
        }
    };
    resetPassword = (req, next) => {
        try {
            let password = req
            console.log("Inside User Service", password);

        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserService();
