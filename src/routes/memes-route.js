const memeApi = require('../api');

module.exports =  {
  path: '/memes',
  method: ['GET'],
  handler: async (req, res) => {
    const querySearch = req.params.q || '';
    const memes = await memeApi.getMemes({ querySearch });

    res.writeHead(200);
    res.end(memes);
  }
};