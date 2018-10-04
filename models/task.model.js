const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    text: {type: String, required: true, max: 500},
    id: {type: String, required: true,  unique: true  },
    completed: {type: Boolean, required: true},
    importance: {type: Boolean, required: true},
    userId: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);