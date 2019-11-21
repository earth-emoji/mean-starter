const Todo = require('../models/todoModel');
const base = require('./baseController');

exports.GetAllTodos = base.getAll(Todo);
exports.CreateTodo = base.createOne(Todo);