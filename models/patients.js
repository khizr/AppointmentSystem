/* patient model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PatientSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: ({
			validator: (str) => validator.matches(str, /^user(?!0)(\d*[02468])*$/),   // custom validator
			message: 'Patient Name Not Valid'
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
PatientSchema.pre('save', function(next) {
	const patient = this; // binds this to patient document instance

	// checks to ensure we don't hash password more than once
	if (patient.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(patient.password, salt, (err, hash) => {
				patient.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// Checks to see if username already exists in the database
PatientSchema.statics.findByUserName = function(username) {
    const patient = this

    return patient.findOne({ username: username }).then((patient) => {
		if (patient) {
			return Promise.reject("Username Found")  // a rejected promise
        }
    })

}

// A static method on the document model.
// Allows us to find a patient document by comparing the hashed password
//  to a given one, for example when logging in.
PatientSchema.statics.findByUserNamePassword = function(username, password) {
	const patient = this // binds this to the patient model

	// First find the patient by their username
	return patient.findOne({ username: username }).then((patient) => {
		if (!patient) {
			return Promise.reject("Username Not Found")  // a rejected promise
		}
		// if the patient exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, patient.password, (err, result) => {
				if (result) {
					resolve(patient)
				} else {
					reject("Wrong Password")
				}
			})
		})
	})
}

// make a model using the patient schema
const Patient = mongoose.model('patient', PatientSchema)
module.exports = { Patient }

