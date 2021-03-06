
/*
*@purpose Database Configuration for MONGODB
*@author  Rohan Kadam 
*/
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//to use change database url according to it.
mongoose.connect('mongodb://localhost:27017/caloriesDB',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});