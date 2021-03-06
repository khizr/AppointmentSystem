/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { Patient } = require("./models/patients");
const { CalendarBooking } = require("./models/clndrBookingModel");
const { Message } = require("./models/message");
const { Clinic } = require("./models/clinics");
const { Admin } = require("./models/admin");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
);


/** Patient routes below **/
// Set up a POST route to create a patient user
app.post("/patients/register", (req, res) => {

    // Create a new user
    const patient = new Patient({
        username: req.body.username,
        password: req.body.password
    });

    Patient.findByUserName(patient.username)
    .then( () => {

        // Save the patient
        patient.save()
        .then(patient => {
            res.send(patient);
        })
        .catch(error => {
            res.status(400).send(error); // 400 for bad request
        });

    })
    .catch( () => {
        res.status(406).send()   
    });
    
});

// A route to login and create a session
app.post("/patients/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Use the static method on the Patient model to find a patient
    // by their email and password
    Patient.findByUserNamePassword(username, password)
        .then(patient => {
            // Add the patient's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.patient = patient._id;
            req.session.username = patient.username;
            res.send({ currentUser: patient.username });
        })
        .catch(error => {
            error  === 'Username Not Found' ? res.status(400).send() : res.status(406).send()   
        });
});

// // A route to logout a patient
app.get("/patients/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// // A route to check if a patient is logged in on the session cookie
app.get("/patients/check-session", (req, res) => {
    if (req.session.patient) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

/** Clinic routes below **/
// Set up a POST route to create a clinic user
app.post("/clinics/register", (req, res) => {

    // Create a new clinic
    const clinic = new Clinic({
        name: req.body.name,
        address: req.body.address,
        username: req.body.username,
        password: req.body.password
    });
    
    Clinic.findByUserName(clinic.username)
    .then( () => {

        // Save the clinic
        clinic.save()
        .then(clinic => {
            res.send(clinic);
        })
        .catch(error => {
            res.status(400).send(error); // 400 for bad request
        });

    })
    .catch( () => {
        res.status(406).send()   
    });

});

// A route to login and create a session
app.post("/clinics/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Use the static method on the Patient model to find a patient
    // by their email and password
    Clinic.findByUserNamePassword(username, password)
        .then(clinic => {
            // Add the clinic's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.clinic = clinic._id;
            req.session.username = clinic.username;
            res.send({ currentUser: clinic.username });
        })
        .catch(error => {
            error  === 'Username Not Found' ? res.status(400).send() : res.status(406).send() 
        });
});

// A route to logout a clinic
app.get("/clinics/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a clinic is logged in on the session cookie
app.get("/clinics/check-session", (req, res) => {
    if (req.session.clinic) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

/** Admin routes below **/
// Set up a POST route to create a admin user
app.post("/admins/register", (req, res) => {

    // Create a new admin
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    });
    
    // Save the user
    admin.save().then(
        admin => {
            res.send(admin);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );

});

// A route to login and create a session
app.post("/admins/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Use the static method on the Patient model to find a patient
    // by their email and password
    Admin.findByUserNamePassword(username, password)
        .then(admin => {
            // Add the admin's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.admin = admin._id;
            req.session.username = admin.username;
            res.send({ currentUser: admin.username });
        })
        .catch(error => {
            error  === 'Username Not Found' ? res.status(400).send() : res.status(406).send() 
        });
});

// A route to logout a admin
app.get("/admins/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a admin is logged in on the session cookie
app.get("/admins/check-session", (req, res) => {
    if (req.session.admin) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});


// A route to book an appointment for a specific date/time
app.post("/Calendar", (req, res) => {
    log(req.body)
    //mongoose connection ready check
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }
    const booking = new CalendarBooking({
		clinicName: req.body.clinicName,
        month: req.body.month,
        day: req.body.day,
        time: req.body.time,
        year: req.body.year,
        creator: req.session.patient
    })
    
    //check if this timing is available
    CalendarBooking.findOne({clinicName: req.body.clinicName, month: req.body.month, day: req.body.day, time: req.body.time, year: req.body.year}).then((old) => {
		if (!old) {
            booking.save().then((result) => {
                res.send(result)
            }).catch((error) => {
                if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
                    res.status(500).send('Internal server error')
                } else {
                    log(error) // log server error to the console, not to the client.
                    res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
                }
            })
		} else {
			/// sometimes we wrap returned object in another object:
            //res.send({student})   
			res.status(400).send('Time Slot Unavailable')
		}
	})
	.catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	})
})

// A route to get list of appointments for a specific user
app.get('/Calendar', (req, res) => {

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	CalendarBooking.find({
		creator: req.session.patient // from authenticate middleware
	}).then((bookings) => {
		res.send({ bookings }) // can wrap students in object if want to add more properties
	})
	.catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	})
})


app.get('/StoresNearYou', (req, res) => {

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Clinic.find().then((clinics) => {
		res.send({ clinics }) // can wrap students in object if want to add more properties
	})
	.catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	})
})

// A route to get list of messages
app.get('/message', (req, res) => {

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Message.find().then((message) => {
        res.send({ message }) 
        console.log("post request completed")
	})
	.catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	})
})

// Other routes
app.post('/message', (req, res) => {
	// log(req.body)

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  
    console.log("post request made")
	// Create a new message using the Message mongoose model
	const message = new Message({
        text: req.body.text,
        to_user: req.body.to_user,
        from_user: req.body.from_user
	})


	// Save message to the database
	message.save().then((result) => {
        res.send(result)
        console.log("sent")
	}).catch((error) => {
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			log(error) // log server error to the console, not to the client.
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	})
})



/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/team05-reactapp/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/patientlogin", "/cliniclogin", "/userhome", "/registerclinic", "/registerpatient", "/adminlogin", "/adminhome", "/calendar"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(__dirname + "/team05-reactapp/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
