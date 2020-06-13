import express from 'express';
import todoController from '../controllers/todo.controller';

function apiRoutes() {
  const router = express.Router();

  router.get('/todos', todoController.getTodos);

  router.get('/todos/:id', todoController.getTodo);

  router.post('/todos', todoController.addTodo);

  // router.put('/todos/:id', (req, res) => {});

  // router.delete('/todos/:id', (req, res) => {});

  return router;
}

module.exports = apiRoutes;
