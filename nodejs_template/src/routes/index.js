"use strict";

const express = require('express');
const router = express.Router();

const mainRoute = require('./main.routes');

const defaultRoutes = [
  {
    path: '/main',
    route: mainRoute,
  },
  
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;