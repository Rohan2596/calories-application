const response = {};
class UserController {

    userRegister = (req, res, next) => {
        try {
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
                console.log(req.body);
                response.success = true;
                response.message = "User Registration Success.";
                return res.status(200).send(response);
            }

        } catch (error) {

            next(error)

        }
    };
    userLogin = (req, res) => {
        try {
            req.checkBody('email', 'Invalid Email ID!').notEmpty().isEmail();
            req.checkBody('password', 'Invalid Password!').notEmpty();

            let validationErrors = req.validationErrors();

            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials!";
                response.error = validationErrors;
                return res.status(500).send(response);
            } else {

                response.success = true;
                response.message = "User Login Successfull";
                response.data = req.body;
                return res.status(200).send(response);

            }
        } catch (error) {

            response.success = false;
            response.message = "User Login Failed.";
            res.status(500).send(response);

        }
    };
    userDetails = (req, res) => {
        try {
            response.success = true;
            response.message = "User Details Success.";
            res.status(200).send(response);
        } catch (error) {

            response.success = false;
            response.message = "User Details Failed.";
            res.status(500).send(response);

        }
    };
    getAllUser = (req, res) => {
        try {
            response.success = true;
            response.message = "Get All User Success.";
            res.status(200).send(response);
        } catch (error) {

            response.success = false;
            response.message = "Get All User Failed.";
            res.status(500).send(response);

        }
    };
    forgotPassword = (req, res) => {
        try {
            response.success = true;
            response.message = "Password Forgot Success.";
            res.status(200).send(response);
        } catch (error) {

            response.success = false;
            response.message = "Password Forgot Failed.";
            res.status(500).send(response);

        }
    };
    resetPassword = (req, res) => {
        try {
            response.success = true;
            response.message = "Password Reset Success.";
            res.status(200).send(response);
        } catch (error) {

            response.success = false;
            response.message = "Password Reset Failed.";
            res.status(500).send(response);

        }
    }

}
module.exports = new UserController();
