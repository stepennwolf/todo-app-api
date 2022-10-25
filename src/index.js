const { Sequelize } = require('sequelize');
const { createApp } = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

let server;

const sequelize = new Sequelize(config.db.dbname, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    logger.info('Connected to MySQL Database');
    server = createApp(sequelize).listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  })
  .catch(err => console.error('Unable to connect to database', err));

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
