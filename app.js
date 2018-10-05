// app.js
const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/task.route'); // Imports routes for the products
const user = require('./routes/user.route'); // Imports routes for the products

// initialize our express app
const app = express();
const session = require('express-session');
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = process.env.MONGODB_URL;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(session({secret:"asd2qwrfw2qwq423ec", resave:false, saveUninitialized:true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tasks', task);
app.use('/users', user);


app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});