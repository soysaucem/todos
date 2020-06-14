import express from 'express';
import { apiRoutes } from './api.route.js';

export function routes() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Todo App' });
  });

  router.use('/api', apiRoutes());

  return router;
}
