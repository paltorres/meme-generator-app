const commandListener = require('./commands');

module.exports.registerListeners = (app) => {
  commandListener.register(app);
};