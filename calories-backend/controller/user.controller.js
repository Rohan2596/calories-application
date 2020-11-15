const userService = require('../service/user.service')

class UserController {

    userRegister = (req, res, next) => {
        try {
            let response = {};
            req.checkBody('firstName', 'Invalid First Name!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('lastName', 'Invalid Last Name!').notEmpty().isAlpha().isLength({ min: '3' });
            req.checkBody('email', 'Invalid Email ID!').notEmpty().isEmail();
            req.checkBody('mobile', 'Invalid Mobile Number!').notEmpty().isMobilePhone().isLength({ min: '10', max: '10' });
            req.checkBody('password', 'Invalid Password!').notEmpty().isLength({ min: '8', max: '8' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = validationErrors;
                return res.status(500).send(response);
            } else {
                const user = {
                    'firstName': req.body.firstName,
                    'lastName': req.body.lastName,
                    'email': req.body.email,
                    'mobile': req.body.mobile,
                    'password': req.body.password
                }

                userService.addUser(user).then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = data.message;
                    response.data = user;
                    response.error = data.error
                    return res.status(400).send(response);
                }
                );
            }
        } catch (error) {
            next(error)
        }
    };
    userLogin = (req, res, next) => {
        try {
            let response = {};
            req.checkBody('email', 'Invalid Email ID!').notEmpty().isEmail();
            req.checkBody('password', 'Invalid Password!').notEmpty().isLength({ min: '8', max: '8' });

            let validationErrors = req.validationErrors();

            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = validationErrors;
                response.data = req.body;
                return res.status(500).send(response);
            } else {
                const login = {
                    'email': req.body.email,
                    'password': req.body.password
                }
                userService.authUser(login).then((login) => {
                    response.success = true;
                    response.message = login.message;
                    response.data = login.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = login.message;
                    response.data = login;
                    response.error = data.error
                    return res.status(400).send(response);
                }
                );

            }
        } catch (error) {

            next(error)


        }
    };
    userDetails = (req, res, next) => {
        try {
            const response = {};
            let token = req.params.token;
            console.log(token);
            if (token) {
                userService.getUser(token).then((user) => {
                    response.success = true;
                    response.message = user.message;
                    response.data = user.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = user.message;
                    response.data = token;
                    response.error = data.error
                    return res.status(400).send(response);
                }
                );
            } else {
                response.success = false;
                response.message = "User Details Failed.";
                response.data = token;
                response.error = "invalid Token "
                res.status(400).send(response);
            }
        } catch (error) {
            next(error)
        }
    };
    getAllUser = (req, res, next) => {
        try {
            const response = {};
            userService.getAllUser().then((details) => {
                response.success = true;
                response.message = details.message;
                response.data = details.data;
                response.error = ""
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false
                response.message = details.message;
                response.data = details.data;
                response.error = data.error
                return res.status(400).send(response);
            }
            );
        } catch (error) {
            response.success = false;
            response.message = "Get All User Failed.";
            res.status(500).send(response);

        }
    };
    forgotPassword = (req, res, next) => {
        try {
            const response = {};

            req.checkBody('email', 'Email ID is required!').notEmpty();
            req.checkBody('email', 'Invalid Email ID!').isEmail();

            let validationErrors = req.validationErrors();

            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = errors;
                response.data = req.body
                return res.status(500).send(response);
            } else {
                userService.forgotPassword(req.body.email);
                response.success = false;
                response.message = "User Password forgot Successfully.";
                response.data = req.body
                response.error = ""
                return res.status(200).send(response);

            }
        } catch (error) {
            next(error)
        }
    };
    resetPassword = (req, res, next) => {
        try {
            const response = {};

            req.checkBody('password', 'Invalid Password!').notEmpty().equals(req.body.confirmPassword).isLength({ min: '8', max: '8' });

            let validationErrors = req.validationErrors();

            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = validationErrors;
                response.data = req.body
                return res.status(500).send(response);
            } else {
                userService.resetPassword(req.body.password)
                response.success = true;
                response.message = "User Password Reset Successfully.";
                response.data = req.body;
                response.error = ""
                return res.status(200).send(response);

            }
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserController();
