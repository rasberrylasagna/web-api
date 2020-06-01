import express = require('express');
// Create a new express app instance
import { router as indexRouter } from './routes/index';
import { router as usersRouter } from './routes/users';
import dotenv from 'dotenv';
dotenv.config();

const app: express.Application = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
