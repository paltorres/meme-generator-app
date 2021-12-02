const { modals } = require('../../user-interface');

const createMemeCallback = async ({ shortcut, command, client, ack, payload }) => {
  await ack()
  
  console.log('create-meme state --------------', payload.state);
};

module.exports = {
  createMemeCallback
};
