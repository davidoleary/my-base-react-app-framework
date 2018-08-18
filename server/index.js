const PORT = process.env.PORT || 3020;
const ENV = process.env.NODE_ENV || 'Dev';
import logger from 'mf-logger';
import app from './src/app';
import conn from './src/helpers/mongodb-connect';

logger.configure({
  env: ENV,
  logger: {
    isEnabled: false,
    level: process.env.LOGGING_LEVEL || 'info',
    appName: 'content-rendering-api',
  },
  dataDog: {
    isEnabled: false,
  }
});

let server;
conn.open().then(() =>{
  server = app.listen(PORT, () => {
    logger.info(`NodeEnv ${ENV}`);
    logger.info(`App listening at http://localhost:${PORT}`);
  });
}).catch(function(err) {
  logger.error(err);
});
