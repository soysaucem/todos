const express = require('express');
const todos = require('./todos.route.js');
const apiRoutes = require('./api.route.js');

function routes() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('pages/index');
  });

  router.use('/todos', todos());
  router.use('/api', apiRoutes());

  return router;
}

module.exports = routes;
