import { Todo } from '../models/todo.model';
import { v4 } from 'uuid';

export function addTodo(req, res, next) {
  try {
    const { title, description } = req.body;

    if (title && description) {
      Todo.insertMany([{ _id: v4(), title, description, completed: false }]);
      res.status(204).send();
    }
  } catch (err) {
    return next(err);
  }
}

export function deleteTodo(req, res, next) {
  try {
    const { id } = req.body;

    if (id) {
      Todo.remove(id);
      res.status(204).send();
    }
  } catch (err) {
    return next(err);
  }
}

export async function getTodos(req, res, next) {
  try {
    const todoItems = await Todo.find();
    res.json(todoItems);
  } catch (err) {
    return next(err);
  }
}

export async function getTodo(req, res, next) {
  try {
    const { id } = req.params;

    if (id) {
      const todoItem = await Todo.findById(id);
      res.json(todoItem);
    }
  } catch (err) {
    return next(err);
  }
}
