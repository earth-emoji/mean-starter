const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Please submit a task.']
    },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

