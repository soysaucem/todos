import express from 'express';
import path from 'path';

function todos() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  return router;
}

module.exports = todos;
