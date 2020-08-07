/* Calendar mongoose model */
const mongoose = require('mongoose')

const CalendarBooking = mongoose.model('CalendarBooking', {
	clinicName: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	month: {
		type: String,
		required: true
    },
    day: {
        type: String,
		required: true
    },
    time: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = { CalendarBooking }