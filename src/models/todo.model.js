import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  _id: String,
  title: String,
  description: String,
  completed: Boolean,
  deadline: String,
  createdAt: String,
});

const todoModel = model('todo', todoSchema, 'todos');

module.exports = todoModel;
