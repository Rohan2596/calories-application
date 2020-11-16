const route = require('express').Router();
const userController=require('../controller/user.controller');
const mealsController=require('../controller/meal.controller');

/*
  @author  :- Rohan Ravindra Kadam 
  @Purpose :-  User routes for Login ,Registration 
               ,password updation and many more.
  
*/
route.post('/user/add',userController.userRegister);
route.post('/user/auth',userController.userLogin);
route.get('/user/detail/:userId',userController.userDetails);
route.get('/user/all',userController.getAllUser);
route.get('/user/password/forgot',userController.forgotPassword);
route.post('/user/password/reset/:userId',userController.resetPassword);


/*
  @author   :- Rohan Ravindra Kadam
  @Purpose  :- Meals routes for add, updating and getting. 
*/
route.post('/meal/add/:userId',mealsController.addMeal);
route.put('/meal/edit/:userId/:id',mealsController.editMeal);
route.delete('/meal/remove/:userId/:id',mealsController.deleteMeal);
route.get('/meal/all/:userId',mealsController.getAllUserMeals);


module.exports=route;