const { Modal, Blocks, Elements } = require('slack-block-builder');

// module.exports = () => {
//   new Modal({ title: 'Create meme', submit: 'Create', callbackId: 'create-meme' })
//   .blocks(
//     Blocks.Input('test'),
//   )
// }

module.exports = () => ({
	"type": "modal",
	"callback_id": "create-meme",
	"title": {
		"type": "plain_text",
		"text": "Generate a meme",
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
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "search-meme",
			},
			"label": {
				"type": "plain_text",
				"text": "Search Image",
				"emoji": true
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "divider"
		},
		{
			"type": "image",
			"image_url": "https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1",
			"alt_text": "inspiration"
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "top-text",
			},
			"label": {
				"type": "plain_text",
				"text": "Top Text",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "bottom-text",
			},
			"label": {
				"type": "plain_text",
				"text": "Bottom Text",
				"emoji": true
			}
		}
	]
});
