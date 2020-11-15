const mealService = require('../service/meal.service')
class MealController {

    addMeal = (req, res, next) => {
        try {
            let response = {}
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count should be number more 0 !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                response.data = req.body
                return res.status(500).send(response);
            } else {
                mealService.addMeal(req.body).then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = data.message;
                    response.data = "";
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            }


        } catch (error) {
            next(error)
        }
    };
    editMeal = (req, res, next) => {
        try {
            let response = {}
            let mealId = req.params.id;
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                response.data = req.body
                return res.status(500).send(response);
            } else {
                if (mealId) {
                    let meal = {
                        'mealId': req.params.id,
                        'token': req.params.token,
                        'title': req.body.title,
                        'caloriesCount': req.body.caloriesCount
                    }

                    mealService.editMeal(meal).then((data) => {
                        response.success = true;
                        response.message = data.message;
                        response.data = data.data;
                        response.error = ""
                        return res.status(200).send(response);
                    }).catch((error) => {
                        response.success = false
                        response.message = data.message;
                        response.data = "";
                        response.error = error
                        return res.status(400).send(response);
                    }
                    );

                } else {
                    response.success = false;
                    response.message = "Invalid Meal Id";
                    response.error = "Meal id or token invalid.";
                    response.data = ""
                    return res.status(400).send(response);

                }
            }


        } catch (error) {
            next(error)
        }
    };
    deleteMeal = (req, res, next) => {
        try {
            let response = {}

            let mealId = req.params.id;
            if (mealId) {

                mealService.deleteMeal(mealId).then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = data.message;
                    response.data = "";
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            } else {
                response.success = false;
                response.message = "Invalid Meals Id!";
                response.data = mealId
                response.error = "Invalid Meals Id!"
                return res.status(500).send(response);

            }


        } catch (error) {
            next(error)
        }
    };
    getAllUserMeals = (req, res, next) => {
        try {
            let response = {}
            let userId = req.params.token;
            if (userId) {
                mealService.getAllUserMeals(userId).then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    response.error = ""
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = data.message;
                    response.data = "";
                    response.error = error
                    return res.status(400).send(response);
                }
                );
            } else {
                response.success = false;
                response.message = "Invalid Meals Id!";
                response.data = mealId;
                response.error = "Invalid Meals Id!"
                return res.status(500).send(response);

            }


        } catch (error) {
            next(error)
        }
    }
}
module.exports = new MealController();