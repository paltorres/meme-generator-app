const { modals } = require('../../user-interface');
const MemeApi = require('../../api')
const createMemeCallback = async ({ shortcut, command, client, ack, payload }) => {
  await ack()
  const {bottom_text, top_text, search_meme} = Object.values(payload.values);
  const url = await MemeApi.getFirstMeme({search_meme,top_text,bottom_text});
  console.log(url);
  console.log('create-meme state --------------', payload.state);

};

module.exports = {
  createMemeCallback
};
