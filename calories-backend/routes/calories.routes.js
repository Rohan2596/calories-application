const route = require('express').Router();
const userController=require('../controller/user.controller');

/*
  @author  :- Rohan Ravindra Kadam 
  @Purpose :-  User routes for Login ,Registration 
               ,password updation and many more.
  
*/
route.post('/user/add',userController.userRegister);
route.post('/user/auth',userController.userLogin);
route.get('/user/detail',userController.userDetails);
route.get('/user/all',userController.getAllUser);
route.get('/user/password/forgot',userController.forgotPassword);
route.post('/user/password/reset',userController.resetPassword);

/*
  @author   :- Rohan Ravindra Kadam
  @Purpose  :- Meals routes for add, updating and getting. 
*/
route.post('/meal/add');
route.put('/meal/edit');
route.get('/meal/remove');
route.get('/meal/all')


module.exports=route;