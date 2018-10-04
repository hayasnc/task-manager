// app.js
const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/task.route'); // Imports routes for the products
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds235180.mlab.com:35180/todo_db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tasks', task);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});