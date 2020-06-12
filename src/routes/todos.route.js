const express = require('express');
const path = require('path');

function todos() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  return router;
}

module.exports = todos;
