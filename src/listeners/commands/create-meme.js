const { modals } = require('../../user-interface');

const modalFormMemeCallback = async ({ shortcut, command, ack, respond }) => {
  await ack()

  await client.views.open({
    // response_type: 'in_channel',
    trigger_id: shortcut.trigger_id,
    view: modals.modalFormMeme(),
  });
};


module.exports = {
  modalFormMemeCallback
};
