const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const routes = require('./routes/index.route');

const app = express();
const PORT = 3000;

// Set up app and middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(cors());
app.use(bodyParser.json());
app.use(
  sassMiddleware({
    src: path.join(__dirname, '/static'),
    dest: path.join(__dirname, '/static'),
  })
);
app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes());

// Run app
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
