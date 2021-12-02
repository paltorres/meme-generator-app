const { createMemeCallback } = require('./create-meme');

module.exports.register = (app) => {
  app.view('create-meme', createMemeCallback);
};