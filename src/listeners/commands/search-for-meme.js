
const searchForMemesCallback = async ({ command, ack, respond }) => {
  // Acknowledge command request
  await ack();

  await respond(`${command.text}`);
}

module.exports = {
  searchForMemesCallback
};