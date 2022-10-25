const express = require('express');
const authRoute = require('./auth.route');
const todosRoute = require('./todos.route');

exports.initRoutes = () => {
  const routes = [
    {
      path: '/auth',
      route: authRoute,
    },
    {
      path: '/todos',
      route: todosRoute,
    }
    // TODO: define new routes here
  ];

  const router = express.Router();

  routes.forEach((route) => {
    router.use(route.path, route.route);
  });

  return router;
}
