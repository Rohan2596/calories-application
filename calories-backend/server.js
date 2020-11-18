const express=require('express');
const app=express();
const calorieRoutes=require('./routes/calories.routes')
const bodyParser = require('body-parser');
const createError=require('http-errors')
const cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//Database Connection
require('../calories-backend/configuration/database.connection')


//Express Validator
const expressValidator=require('express-validator');
app.use(expressValidator());

//Adding Routes to server.js 
app.use('/calories',calorieRoutes);

app.use((req,res,next)=>{
    next(createError(404));
})

app.use((error,req,res,next)=>{
    let response={
        success:false,
        status:500,
        message:error.message
    };
    res.json(response);
})

app.listen('3001',()=>{
    console.log('Server Started at PORT 3001');
})