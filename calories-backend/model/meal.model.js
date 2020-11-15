const mongoose = require('mongoose');
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

        } catch (error) {
            next(error)

        }
    };
    getUserMeal = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
               mealModel.find().then(result => {
                    
                    resolve({ message: 'Meals Added successfully!', data: result });
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

