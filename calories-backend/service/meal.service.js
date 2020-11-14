class MealService{

    addMeal=(req,res,next)=>{
        try {
            let meal={
                'title':req.title,
                'caloriesCount':req.caloriesCount
            }
            console.log("Inside Meal Service",meal);
        } catch (error) {
            next(error)
        }
    }



}
module.exports = new MealService();


