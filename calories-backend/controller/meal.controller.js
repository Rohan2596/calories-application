const { response } = require("express");

class MealController {

    addMeal = (req, res, next) => {
        try {
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count should be number more 0 !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                response.data=req.body
                return res.status(500).send(response);
            } else {

                response.success = true;
                response.message = "Meals Added Successfully.";
                response.data = req.body;
                response.error=""
                return res.status(200).send(response);
            }


        } catch (error) {
            next(error)
        }
    };
    editMeal = (req, res, next) => {
        try {
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                response.data=req.body
                return res.status(500).send(response);
            } else {

                response.success = true;
                response.message = "Meals Edited Successfully.";
                response.data = req.body;
                response.error=""
                return res.status(200).send(response);
            }


        } catch (error) {
            next(error)
        }
    };
    deleteMeal = (req, res, next) => {
        try {
            let mealId = req.params.id;
            if (mealId) {

                response.success = true;
                response.message = "Meals Delete Successfully.";
                response.data = mealId;
                response.error=""
                return res.status(200).send(response);
            } else {
                response.success = false;
                response.message = "Invalid Meals Id!";
                response.data=mealId
                response.error="Invalid Meals Id!"
                return res.status(500).send(response);

            }


        } catch (error) {
            next(error)
        }
    };
    getAllUserMeals = (req, res, next) => {
        try {
            let mealId = req.params.token;
            if (mealId) {
            
                response.success = true;
                response.message = "Getting All Meals Successfully.";
                response.data = mealId;
                response.error=""
                return res.status(200).send(response);
            } else {
                response.success = false;
                response.message = "Invalid Meals Id!";
                response.data = mealId;
                response.error="Invalid Meals Id!"
                return res.status(500).send(response);

            }


        } catch (error) {
            next(error)
        }
    }
}
module.exports = new MealController();