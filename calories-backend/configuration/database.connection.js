const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
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