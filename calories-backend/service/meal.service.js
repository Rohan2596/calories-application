const mealModel = require("../model/meal.model");

class MealService {

    addMeal = (req, res, next) => {
        try {
            let meal = {
                'title': req.title,
                'caloriesCount': req.caloriesCount
            }
            console.log("Inside Meal Service", meal);
            return mealModel.addMeal(meal).then((data) => {
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
                'mealId':req.mealId,
                'token':req.token,
                'title': req.title,
                'caloriesCount': req.caloriesCount
            }
            console.log("InsideEdit Meal Service", meal);
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
            let mealId = req
            return mealModel.deleteUserMeal(mealId).then((data) => {
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

            return mealModel.getUserMeal(userId).then((data) => {
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


