import todoModel from '../models/todo.model';
import { v4 } from 'uuid';

function addTodo(req, res, next) {
  try {
    const { title, description } = req.body;

    if (title && description) {
      todoModel.insertMany([
        { _id: v4(), title, description, completed: false },
      ]);
      res.status(204).send();
    }
  } catch (err) {
    return next(err);
  }
}

function deleteTodo(req, res, next) {
  try {
    const { id } = req.body;

    if (id) {
      todoModel.remove(id);
      res.status(204).send();
    }
  } catch (err) {
    return next(err);
  }
}

async function getTodos(req, res, next) {
  try {
    const todoItems = await todoModel.find();
    res.json(todoItems);
  } catch (err) {
    return next(err);
  }
}

async function getTodo(req, res, next) {
  try {
    const { id } = req.params;

    if (id) {
      const todoItem = await todoModel.findById(id);
      res.json(todoItem);
    }
  } catch (err) {
    return next(err);
  }
}

module.exports = { addTodo, deleteTodo, getTodos, getTodo };
