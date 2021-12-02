require('dotenv').config();

const { App, LogLevel } = require('@slack/bolt');
const { registerListeners } = require('./listeners');
const { getRoutes } = require('./routes');

// Initialize Bolt app, using the default HTTPReceiver
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
  customRoutes: getRoutes()
});

registerListeners(app);

app.error((error) => {
  console.error(error);
});

(async () => {
  let port = process.env.PORT || 4001;
  try {
    await app.start(port);
    console.log('⚡️ Bolt app started in port: ' + port);
  } catch (error) {
    console.error(error);
  }
})();
