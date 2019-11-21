const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(todoController.GetAllTodos)
    .post(todoController.CreateTodo);

module.exports = router;