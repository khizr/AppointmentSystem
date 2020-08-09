/* clinic model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const ClinicSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: ({
			validator: (str) => validator.matches(str, /^user(?!1\b)\d*[13579]$/), // custom validator
			message: 'Clinic Name Not Valid'
		})
	}, 
	password: {
		type: String,
		required: true,
		minlength: 4,
		// validate: {
		// 	validator: validator.equals,   // custom validator
		// 	message: 'Not valid password'
		// }
	}
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
ClinicSchema.pre('save', function(next) {
	const clinic = this; // binds this to clinic document instance

	// checks to ensure we don't hash password more than once
	if (clinic.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(clinic.password, salt, (err, hash) => {
				clinic.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// Checks to see if username already exists in the database
ClinicSchema.statics.findByUserName = function(username) {
    const clinic = this

    return clinic.findOne({ username: username }).then((clinic) => {
		if (clinic) {
			return Promise.reject("Username Found")  // a rejected promise
        }
    })

}

// A static method on the document model.
// Allows us to find a clinic document by comparing the hashed password
//  to a given one, for example when logging in.
ClinicSchema.statics.findByUserNamePassword = function(username, password) {
	const clinic = this // binds this to the clinic model

	// First find the clinic by their username
	return clinic.findOne({ username: username }).then((clinic) => {
		if (!clinic) {
			return Promise.reject("Username Not Found")  // a rejected promise
		}
		// if the clinic exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, clinic.password, (err, result) => {
				if (result) {
					resolve(clinic)
				} else {
					reject("Wrong Password")
				}
			})
		})
	})
}

// make a model using the clinic schema
const Clinic = mongoose.model('clinic', ClinicSchema)
module.exports = { Clinic }

