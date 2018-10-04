const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);