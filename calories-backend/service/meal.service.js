class MealService {

    addMeal = (req, res, next) => {
        try {
            let meal = {
                'title': req.title,
                'caloriesCount': req.caloriesCount
            }
            console.log("Inside Meal Service", meal);
        } catch (error) {
            next(error)
        }
    };
    editMeal = (req, res, next) => {
        try {
            let meal = {
                'title': req.title,
                'caloriesCount': req.caloriesCount
            }
            console.log("Inside Edit Meal Service", meal);
        } catch (error) {
            next(error)
        }
    };
    deleteMeal = (req, res, next) => {
        try {
            let mealId = req
            console.log("Inside Delete mealId", mealId);
        } catch (error) {
            next(error)
        }
    };
    getAllUserMeals = (req, res, next) => {
        try {
            let userId = req
            console.log("Inside User ID", userId);
        } catch (error) {

        }
    }



}
module.exports = new MealService();


