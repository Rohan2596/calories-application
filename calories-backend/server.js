const express=require('express');
const app=express();
const calorieRoutes=require('./routes/calories.routes')


//Adding Routes to server.js 
app.use('/calories',calorieRoutes);

app.listen('3000',()=>{
    console.log('Server Started at PORT 3000');
})