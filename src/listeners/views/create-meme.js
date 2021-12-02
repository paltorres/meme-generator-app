const { modals } = require('../../user-interface');
const MemeApi = require('../../api')
const createMemeCallback = async ({ shortcut, command, client, ack, body, payload }) => {
  await ack();

  const vals = Object.values(payload.state.values);
  let search_meme, top_text, bottom_text;
  vals.forEach((value) => {
    if (value['search_meme']) {
      search_meme = value['search_meme'];
    } else if (value['top_text']) {
      top_text = value['top_text'];
    } else if (value['bottom_text']) {
      bottom_text = value['bottom_text'];
    }
  });

  const url = await MemeApi.getFirstMeme({
    querySearch: search_meme.value,
    text0: top_text.value,
    text1: bottom_text.value
  });

  const user = body['user']['id'];

  await client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user,
    text: url,
  });
  console.log(url);
};

module.exports = {
  createMemeCallback
};
