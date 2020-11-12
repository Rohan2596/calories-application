const route = require('express').Router();
const userController=require('../controller/user.controller');
const mealsController=require('../controller/meal.controller')

/*
  @author  :- Rohan Ravindra Kadam 
  @Purpose :-  User routes for Login ,Registration 
               ,password updation and many more.
  
*/
route.post('/user/add',userController.userRegister);
route.post('/user/auth',userController.userLogin);
route.get('/user/detail/:token',userController.userDetails);
route.get('/user/all',userController.getAllUser);
route.get('/user/password/forgot',userController.forgotPassword);
route.post('/user/password/reset/:token',userController.resetPassword);

/*
  @author   :- Rohan Ravindra Kadam
  @Purpose  :- Meals routes for add, updating and getting. 
*/
route.post('/meal/add/:token',mealsController.addMeal);
route.put('/meal/edit/:token/:id',);
route.get('/meal/remove');
route.get('/meal/all')


module.exports=route;