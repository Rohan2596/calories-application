const mealModel = require("../model/meal.model");
const userModel = require("../model/user.model");
const userService = require("./user.service");

class MealService {

    addMeal = (req, res, next) => {
        try {
          
            return mealModel.addMeal(req).then((data) => {
                return data;
               
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    editMeal = (req, res, next) => {
        try {
            let meal = {
                'mealId': req.mealId,
                'userId': req.userId,
                'title': req.title,
                'caloriesCount': req.caloriesCount
            }
            return mealModel.editMeal(meal).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    deleteMeal = (req, res, next) => {
        try {
            return mealModel.deleteUserMeal(req).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    getAllUserMeals = (req, res, next) => {
        try {
            let userId = req
            console.log(req);
            return userModel.getUserMeal(userId).then((data) => {
                return data;
            }).catch((err) => {
                return err;
            });
        } catch (error) {
            next(error)
        }
    }



}
module.exports = new MealService();


