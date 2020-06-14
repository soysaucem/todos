import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  _id: String,
  title: String,
  description: String,
  completed: Boolean,
});

export const Todo = model('todo', todoSchema, 'todos');
