const { appHomeOpenedCallback } = require('./modal');

module.exports.register = (app) => {
  app.command('meme-generator', appHomeOpenedCallback);
};