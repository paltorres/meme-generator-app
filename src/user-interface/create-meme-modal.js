const { Modal, Blocks, Elements } = require('slack-block-builder');

module.exports = () => {
  new Modal({ title: 'Create meme', submit: 'Create', callbackId: 'create-meme' })
  .blocks(
    Blocks.Input('test'),
  )
}
