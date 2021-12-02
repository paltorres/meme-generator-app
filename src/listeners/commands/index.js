const { appHomeOpenedCallback } = require('./search-for-memes');

module.exports.register = (app) => {
  app.command('meme-generator', appHomeOpenedCallback);
};