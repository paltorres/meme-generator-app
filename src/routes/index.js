
const baseRoute = require('./base-route');
const memesRoute = require('./base-route');

module.exports.getRoutes = function (app) {
  return [
    baseRoute,
    memesRoute
  ]
}