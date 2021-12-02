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

app.event('app_home_opened', async ({ event, context, payload }) => {
  // Display App Home
  const homeView = {
    "type": "modal",
    "title": {
      "type": "plain_text",
      "text": "My App",
      "emoji": true
    },
    "submit": {
      "type": "plain_text",
      "text": "Submit",
      "emoji": true
    },
    "close": {
      "type": "plain_text",
      "text": "Cancel",
      "emoji": true
    },
    "blocks": [
      {
        "type": "divider"
      },
      {
        "type": "divider"
      },
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Imagen",
          "emoji": true
        }
      },
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "texto 1",
          "emoji": true
        }
      },
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Texto 2",
          "emoji": true
        }
      },
      {
        "type": "image",
        "image_url": "https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1",
        "alt_text": "inspiration"
      }
    ]
  };
  
  try {
    const result = await app.client.views.publish({
      token: context.botToken,
      user_id: event.user,
      view: homeView
    });
    
  } catch(e) {
    app.error(e);
  }
  
});

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
