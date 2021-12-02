const createMemeCallback = async ({ command, ack, respond }) => {
  await ack()

  await respond(`${command.text}`);
};


module.exports = {
  createMemeCallback
};