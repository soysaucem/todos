import express from 'express';
import todos from './todos.route.js';
import apiRoutes from './api.route.js';

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
