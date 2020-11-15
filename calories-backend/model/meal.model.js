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

        } catch (error) {
            next(error)

        }
    }
}
module.exports = new MealModel();

