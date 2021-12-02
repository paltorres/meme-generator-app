const { modalFormMemeCallback } = require('./create-meme');

module.exports.register = (app) => {
  app.command('/meme-generator', modalFormMemeCallback);
};