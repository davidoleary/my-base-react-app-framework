import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import wrap from 'express-async-wrap';
import path from 'path';

import routes from './routes';

const app = express();
app.use(express.static(path.resolve('build')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build', 'index.html'));
});

app.get('/test', (req, res) => {
  res.json({ test: 'test' });
});

// catch 404 and forward to error handler
app.use(wrap(async (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}));

// error handler
app.use(wrap(async (err, req, res) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
}));

export default app;
