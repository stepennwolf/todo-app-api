const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
// const { jwtStrategy } = require('./config/passport');
const initInjectModels = require('./middlewares/injectModels');
const { initModels } = require('./models');
const { initRoutes } = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

exports.createApp = (sequelize) => {
  const app = express();

  // initialize models with input sequelize (db instance)
  const models = initModels(sequelize);

// set security HTTP headers
  app.use(helmet());

// parse json request body
  app.use(express.json());

// parse urlencoded request body
  app.use(express.urlencoded({ extended: true }));

// sanitize request data
  app.use(xss());

// gzip compression
  app.use(compression());

// enable cors
  app.use(cors({
    origin: config.clientHost,
    credentials: true,
  }));
  app.options('*', cors());

  // jwt authentication
  app.use(passport.initialize());

  app.use(initInjectModels(sequelize.models));

  // v1 api routes
  app.use('/v1', initRoutes());

// send back a 404 error for any unknown api request
  app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

// convert error to ApiError, if needed
  app.use(errorConverter);

// handle error
  app.use(errorHandler);

  return app;
};
