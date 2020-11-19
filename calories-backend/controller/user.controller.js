const userService = require('../service/user.service')
/*
  @Purpose User Controller consist of api endpoints for meal operation.
  @author Rohan Kadam
*/
class UserController {

    /*
      @Purpose Add/Register User endpoint passing request body with user.
      @requestbody 
        {
        "firstName":"Rohan",
        "lastName":"Kadam",
        "email":"rohankadam@gmail.com",
        "mobile":"7894561230",
        "password":"Rohan789"
        }
        @method :- POST
      ex:- http://localhost:3001/calories/user/add   
      @author Rohan Kadam
    */
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

    /*
      @Purpose Authenticate/Login User endpoint passing request body with authBOdy.
      @requestbody 
        {
        "email":"rohankadam@gmail.com",
        "password":"Rohan789"
        }
        @method :- POST
      ex:- http://localhost:3001/calories/user/auth   
      @author Rohan Kadam
    */
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
                    response.data = login.data
                    response.error = data.error
                    return res.status(400).send(response);
                }
                );

            }
        } catch (error) {

            next(error)


        }
    };
    /*
      @Purpose Getting a User endpoint passing userId into query.
      @method :- GET
      ex:- http://localhost:3000/calories/user/detail/5fb205ef81e2e67f4ea6bc66  
      @author Rohan Kadam
    */
    userDetails = (req, res, next) => {
        try {
            const response = {};
            let userId = req.params.userId;

            if (userId) {
                userService.getUser(userId).then((user) => {
                    response.success = true;
                    response.message = user.message;
                    response.data = user.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = user.message;
                    response.data = token;
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            } else {
                response.success = false;
                response.message = "User Details Failed.";
                response.data = userId;
                response.error = "invalid Token "
                res.status(400).send(response);
            }
        } catch (error) {
            next(error)
        }
    };
    /*
  @Purpose Getting ALL User endpoint.
  @method :- GET
  ex:- http://localhost:3001/calories/user/all  
  @author Rohan Kadam
*/
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
    /*
      @Purpose Forgot Password User endpoint passing request body with emailId.
      @requestbody 
        {
        "email":"rohankadam@gmail.com"
        }
        @method :- GET
      ex:- http://localhost:3001/calories/user/password/forgot   
      @author Rohan Kadam
    */
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
                userService.forgotPassword(req.body).then((forgot) => {
                    response.success = true;
                    response.message = forgot.message;
                    response.data = forgot.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = forgot.message;
                    response.data = req.body;
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            }
        } catch (error) {
            next(error)
        }
    };
    /*
      @Purpose ReSet Password User endpoint passing request body with password and userId.
      @requestbody 
    {
         "password":"Rohan001",
         "confirmPassword":"Rohan001"

    }
       @method :- POST
      ex:- http://localhost:3001/calories/user/password/reset/5fafa3c6dbeb32684ca97d6e   
      @author Rohan Kadam
    */
    resetPassword = (req, res, next) => {
        try {
            const response = {};
            let userId = req.params.userId;

            req.checkBody('password', 'Invalid Password!').notEmpty().equals(req.body.confirmPassword).isLength({ min: '8', max: '8' });

            let validationErrors = req.validationErrors();

            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = validationErrors;
                response.data = req.body
                return res.status(500).send(response);
            } else {
                const reset = {
                    userId: userId,
                    password: req.body.password
                };
                userService.resetPassword(reset).then((reset) => {
                    response.success = true;
                    response.message = reset.message;
                    response.data = reset.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = reset.message;
                    response.data = reset.data;
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            }
        } catch (error) {
            next(error)
        }
    };

}
module.exports = new UserController();
