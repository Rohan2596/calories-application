const { response } = require("express");

class MealController {

    addMeal = (req, res, next) => {
        try {
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                console.log(validationErrors);
                return res.status(500).send(response);
            } else {
        
                response.success = true;
                response.message = "Meals Added Successfully.";
                response.data =req.body;
                return res.status(200).send(response);
            }


        } catch (error) {
            next(error)
        }
    };
    editMeal=(req, res, next)=>{
        try {
            req.checkBody('title', 'Invalid Meal Title!').notEmpty().isAlpha().isLength({ min: '2' });
            req.checkBody('caloriesCount', 'Invalid Calories Count !').notEmpty().isNumeric().isLength({ min: '1' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {

                response.success = false;
                response.message = "Invalid Meals Input!";
                response.error = validationErrors;
                console.log(validationErrors);
                return res.status(500).send(response);
            } else {
        
                response.success = true;
                response.message = "Meals Edited Successfully.";
                response.data =req.body;
                return res.status(200).send(response);
            }


        } catch (error) {
            next(error)
        }
    }
}
module.exports = new MealController();