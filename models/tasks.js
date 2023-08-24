const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide a name'],
        trim: true,
        maxlength: [30, 'max length is 30']
    },
    completed: {
        type: Boolean,
        required: false,
        default: false

    }
})

module.exports = mongoose.model('task', taskSchema)