require('dotenv').config();

const { App } = require('@slack/bolt');
const { registerListeners } = require('./listeners');
const memeApi = require('./api');

// Initialize Bolt app, using the default HTTPReceiver
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  customRoutes: [
    {
      path: '/',
      method: ['POST'],
      handler: (req, res) => {
        res.writeHead(200);
        res.end('Health check information displayed here!');
      },
    },
    {
      path: '/memes',
      method: ['GET'],
      handler: async (req, res) => {
        const querySearch = req.params.q || '';
        const memes = await memeApi.getMemes({ querySearch });

        res.writeHead(200);
        res.end(memes);
      }
    }
  ],
});

registerListeners(app);

(async () => {
  let port = process.env.PORT || 4001;
  await app.start(port);
  console.log('⚡️ Bolt app started in port: ' + port);
})();
