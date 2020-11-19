const mealService = require('../service/meal.service')
const userService = require('../service/user.service')

/*
  @Purpose Meal Controller consist of api endpoints for meal operation.
  @author Rohan Kadam
*/
class MealController {

/*
  @Purpose Add Meal endpoint passing request body with meal object with USERID into query.
  @requestbody 
    {
        "title":"Chickoo",
        "caloriesCount":"100"
    }
    @method :- POST
  ex:- http://localhost:3000/calories/meal/add/5fb2130c5841df0c7eeec7be   
  @author Rohan Kadam
*/
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
                let meal = {
                    'userId': req.params.userId,
                    'title': req.body.title,
                    'caloriesCount': req.body.caloriesCount
                }

                mealService.addMeal(meal).then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    response.error = "";
                    userService.addMealtoUser(data.data).then((meal) => {
                        console.log("Meals:-  ", meal);
                    }).catch((err) => {
                        console.log(err);
                    })
                    return res.status(200).send(response);
                }).catch((error) => {
                    response.success = false
                    response.message = "";
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
/*
  @Purpose Edit Meal endpoint passing request body with meal object with USERID into query 
            and also mealId.
  @requestbody 
    {
        "title":"Chickoo",
        "caloriesCount":"100"
    }
   @method :- PUT
  ex:- http://localhost:3000/calories/meal/edit/5fafa3c6dbeb32684ca97d6e/5fb1371aca5fea421ac38878 
  @author Rohan Kadam
*/
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
                        'userId': req.params.userId,
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
/*
  @Purpose Delete User Meals endpoint  USERID into query and MEALID.
   @method :- DELETE
  ex:- http://localhost:3000/calories/meal/all/5fb2130c5841df0c7eeec7be
  @author Rohan Kadam
*/
    deleteMeal = (req, res, next) => {
        try {
            let response = {}

            let mealId = req.params.id;
            if (mealId) {
                let meal = {
                    'mealId': req.params.id,
                    'userId': req.params.userId,
                }

                mealService.deleteMeal(meal).then((data) => {
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
/*
  @Purpose Getting User Meals endpoint  USERID into query.
   @method :- GET
  ex:- http://localhost:3000/calories/meal/all/5fb2130c5841df0c7eeec7be
  @author Rohan Kadam
*/
    getAllUserMeals = (req, res, next) => {
        try {
            let response = {}
            let userId = req.params.userId;
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
                response.data = userId;
                response.error = "Invalid Meals Id!"
                return res.status(500).send(response);

            }


        } catch (error) {
            next(error)
        }
    }
}
module.exports = new MealController();