const route =require('express').Router();


 /*
   @author  :- Rohan Ravindra Kadam 
   @Purpose :-  User routes for Login ,Registration 
                ,password updation and many more.
   
 */ 
route.post('/user/add');
route.post('/user/auth');
route.get('/user/detail');
route.get('/user/all');
route.get('/user/password/forgot');
route.post('/user/password/reset');