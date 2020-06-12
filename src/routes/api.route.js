const express = require('express');
const todoItems = require('../../mock-data.js');

function apiRoutes() {
  const router = express.Router();

  router.get('/todos', (req, res) => {
    res.json(todoItems);
  });

  router.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoItem = todoItems.find((item) => item.id === id);

    res.json(todoItem);
  });

  router.post('/todos', (req, res) => {
    console.log(req.body);
    res.status(204).send();
  });

  // router.put('/todos/:id', (req, res) => {});

  // router.delete('/todos/:id', (req, res) => {});

  return router;
}

module.exports = apiRoutes;
