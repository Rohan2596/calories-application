const mongoose = require('mongoose');
const { resolve } = require('path');
const userModel = require('./user.model');

const mealSchema = new mongoose.Schema({
    'title': {
        type: String,
        required: true
    },
    'caloriesCount': {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
const mealModel = mongoose.model('meals', mealSchema)
class MealModel {
    addMeal = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let meal = new mealModel(req);

                meal.save().then(result => {
                    let data = {
                        "title": result.title,
                        "caloriesCount": result.caloriesCount
                    }
                    resolve({ message: 'Meals Added successfully!', data: data });
                }).catch(err => {
                    reject({ message: 'Meals Failed!', error: err });
                })
            })
        } catch (error) {
            next(error)
        }
    };
    editMeal = (req, next) => {
        try {
            return new Promise((resolve,reject)=>{
                mealModel.findByIdAndUpdate({
                    '_id':req.mealId
                },{
                    $set:{
                        "title": req.title,
                        "caloriesCount": req.caloriesCount
                    
                    }
                }).then(result=>{
                    if (result) {
                        resolve({ message: 'Meals Updated Successful!',data:req });
                    } else {
                        reject({ message: 'Meals Updation Failed.',data:"" });
                    }
                }).catch(err => {
                    reject(err)
                })
            })

        } catch (error) {
            next(error)

        }
    };
    deleteUserMeal = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                mealModel.findByIdAndDelete({
                    '_id': req
                }).then(result => {
                    if (result) {
                        resolve({ message: 'Meal Delete Successfully!.', data: result });
                    } else {
                        reject({ message: 'Meal Not found', data: req });
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error)

        }
    };
    getUserMeal = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                mealModel.find().then(result => {

                    resolve({ message: 'User  Meals:-', data: result });
                }).catch(err => {
                    reject({ message: 'Meals Failed!', error: err });
                })
            })

        } catch (error) {
            next(error)

        }
    }
}
module.exports = new MealModel();

