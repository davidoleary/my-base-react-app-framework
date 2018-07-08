import app from './src/app';

const PORT = process.env.PORT || 3020;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}!`);
});

module.exports = server;
