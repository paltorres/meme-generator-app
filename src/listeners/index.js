const commandListener = require('./commands');
const createMemeListener = require('./views');

module.exports.registerListeners = (app) => {
  commandListener.register(app);
  createMemeListener.register(app);
};