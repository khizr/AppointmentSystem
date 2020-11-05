# Features

Registration: Implemented two registration pages for registration for clinics and patients. On the home 
page, you can click on register and select patient or clinic. On the register page, you need to 
set a username and password for patients and for clinic you need to enter an address and clinic name 
additionally. We also implemented redirection so that only certain users can access certain pages. You must be logged in to access pages.

Log In Pages: Implemented log in pages for clincs, patients, and the admin. From the home page, you
 can select which user you want to login as and the page will direct you to the appropirate login page. 

Home Page: Made the home page and links to each of the other pages and redirection when not logged in.
 Designed slides.

Clinics Near You: Once a patient has logged in he/she can head over to the clinics page and put in thier postal code or address to to find the clinics closest to them. Once they hit the search button the clinics will be sorted in increasing order with respect to distance. Users can also set the Max distance to search within a max distance and only show clinics within that distance. Each clinic also has a book button that redircts you to the calendar page where you can book appointments. Please note that it may take up to a minute for it to calculate distances and sort and show the tables when using the heroku link. When we did it locally it showed the link within a second. 

Calendar: The calendar allows users to book appointments. You can only go to the calendar if you are
logged in as a patient. On the calendar you can change months to select the month you want to book an
appointment in. You can then click on a day on the calendar and the date you clicked on will 
display on the right hand side showing you have selected a day. You can then use the dropdown 
to select a time in the selected day and then click book to book the appointment on the date. 
If the time slot is taken on the day, you will be alerted that the slot is taken. Otherwise, you 
will be notified that the booking has been made. You can also use the view appointments button 
to view your appointments with the clinic.

Chat: The chat feature is now fully functional. Previously the chat feature was all frontend 
but not it is linked to the backend as well. Clinics, Patients and Admin can send messages to any
other Admin, Patient or Clinic. Users can view their chat history as messages will be saved to
a database and can be viewed even after the session has ended. Users can only see messages that 
are sent or received by them. This ensures privacy between the various users.

# Express Routes

what they are used for
what data sent
what data returned

Registration for Patients: app.post("/patients/register", (req, res)
Used to register Patients. Need to send username and password. 

Login for Patients: app.post("/patients/login", (req, res)
Used to login patients. Need to send username and password. Returns JSON with username.

Logout for Patients: app.get("/patients/logout", (req, res)
Used to logout patients. Needs and returns nothing.

Check Session for Users: app.get("/patients/check-session", (req, res)
Checks to see who is currently logged in. Needs nothing, returns username of user that is logged in.

Register for Clinics: app.post("/clinics/register", (req, res)
Used to register clinics into DB. Takes in name, address, username, and password, returns nothing.

Login for Clinics: app.post("/clinics/login", (req, res)
Logs in clinics. Takes username and password and checks username and password in database. Returns username of logged in clinic.

Logs out clinic user. app.get("/clinics/logout", (req, res)
Logs out clinic user. Recieves adn returns nothing.

Check session for clinic. app.get("/clinics/check-session", (req, res)
Returns username of logged in clinic user.

Register Admin. app.post("/admins/register", (req, res)
Registers an admin user. Takes username and password. Returns nothing.

Logs in Admin. app.post("/admins/login", (req, res)
Logs in Admin. Recieves username and password. Returns username of logged in user.

Logs out Admin. app.get("/admins/logout", (req, res)
Takes and returns nothing.

Check session for admin. app.get("/admins/check-session", (req, res)
Check session for admin. Recieves nothing, reutrns username of logged in user.

Calendar Post. app.post("/Calendar", (req, res)
Used to book an appointment in the bookings collection via the calendar page.
Takes in clincName, month, day, time, year, and patient.
If no booking in same time slot, returns the booking made.

Calendar Get. app.get('/Calendar', (req, res)
To get appointments for a specific user.
Takes in username. Returns all appointments for the user.

Gets Messages. app.get('/message', (req, res)
To get messages. Recieves nothing, returns all messages in DB.

Posts Messages. app.post('/message', (req, res)
Sends message to DB. Recieves text of message, from_user, and to_user. Returns saved message.

