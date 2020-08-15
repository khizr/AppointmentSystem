/* Student mongoose model */
const mongoose = require('mongoose')

const Message = mongoose.model('Message', {
	text: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	from_user: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	to_user: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	}
})

module.exports = { Message }