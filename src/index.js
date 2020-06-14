import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import sassMiddleware from 'node-sass-middleware';
import { routes } from './routes/index.route';

const app = express();
const PORT = 3000;
const connectionString =
  'mongodb+srv://todoadmin:admin123@cluster0-a10qg.mongodb.net/simple-todo-app?retryWrites=true&w=majority';

// Set up app and middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(cors());
app.use(bodyParser.json());
app.use(
  sassMiddleware({
    src: path.join(__dirname, '/public'),
    dest: path.join(__dirname, '/public'),
    indentedSyntax: false,
    sourceMap: true,
  })
);
app.use(express.static(path.join(__dirname, './public')));
app.use('/', routes());

// Run app
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected!'));
});
