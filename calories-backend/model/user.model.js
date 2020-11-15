const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    'firstName': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'mobile': {
        type: Number,
        required: true
    },
    'password': {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const userModel = mongoose.model('users', userSchema)
class UserModel {
    register = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                userModel.findOne({
                    'email': req.email
                }).then(result => {
                    if (result) {
                        reject({ message: 'Email Id is already present!' })
                    } else {
                        let user = new userModel(req);
                        user.save().then(
                            result => {
                                let data = {
                                    "firstName": result.firstName,
                                    "lastName": result.lastName,
                                    "email": result.email,
                                    "mobile": result.mobile,
                                    "password": result.password
                                }
                                resolve({
                                    message: 'Registration Successfull!', data: data
                                })
                            }
                        ).catch(err => {
                            reject({
                                message: 'Registration Failed!', error: err
                            })
                        })

                    }
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error);

        }
    };
    login = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                userModel.findOne({
                    'email': req.email
                }).then(result => {
                    if (result) {
                        resolve({
                            message: 'Login Successfull!', data: result
                        })

                    } else {
                        reject({ message: 'User doesnot Exists in system.', data: req.email })

                    }
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error);
        }
    };
    getUserDetails = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                userModel.findOne({
                    'email': req
                }).then(result => {
                    if (result) {
                        resolve({
                            message: 'User Details', data: result
                        })
                    } else {
                        reject({ message: 'User doesnot Exists in system.', data: req.email })
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error)
        }
    };
    getAllUserDetails = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                userModel.find()
                    .then(result => {
                        if (result) {
                            resolve({
                                message: 'Get All Users:-', data: result
                            })
                        } else {
                            reject({
                                message: 'No data found!', data: ""
                            })
                        }
                    }).catch(err => {
                        reject(err)
                    })
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserModel();