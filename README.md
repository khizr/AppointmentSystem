# team05
# there were a few pushs right after 10 with very minor error fixes we only fixed that didnt do anythging else after the deadline

Link: http://cloudclinics.herokuapp.com/

# Phase 2

Features 

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


# Phase 1

General: Cloud Clinics is an application for pateints(users) and clinics(admins) to schdeule and manage apointments. Users can book appointments at clinics by veiwing available appointments at thier respective calendars. Admins(clinics) can manage bookings and remove appointments. It is an application to make booking appointments easy without having to call clinics.


# Phase 1 Individual Contributions10

Huzaifa: I implemented the Calendar page. On this page there is a calendar from which users looking to book an appointment can select a date on which they wish to book their appointment. On the right hand side a block allows you to select a time on the day selected on the calendar. Here you can select a time and submit a request to schedule an appointment for the given day and time.

Khizr Khan (khannkhi4): I implemented the chat view. On this page the user can view the company's contact information such as phone number and address. The big feature of this page is the ability to communicate with the company through the chat functionality. Users can type in their own questions in the text box and click send to post their message. Additionally, users also have the option to ask ready-made questions without having to type them. Four buttons are available, each representing a frequently asked question. Upon clicking each button, the application will post the message to the chat screen without having the user do any typing. In phase 2, I will add the functionality of receiving messages from the server to allow for communication between the user and the company.

Moaz (moazmuha): I implemented the maps or Clinics Near You view. You can navigate to it from the home page. Once you are there you enter your postal code. As of now there is an arbitrary list of postal codes which are the numbers ranging 1 through 10 inclusive. You can also select the maximum distance to look within from your location. When you hit the search button a table is created and displayed of the clinics close to you within your specified distance. The Clinics are listed from closest to furthest(Using there postal codes to determine distance). You can click book now for any clinic and it will take you to that clinics calendar page for now it takes you to the general calendar page. 

Hamza Khan (Github Username: Obsoleete, utorid: khanha11): I implemented the home page as well as the login and register pages. The home page is pretty self explanatory, with the only problem being is that the view for me on my monitor was perfectly fine, but when viewed on my teammates laptop screens, the login and register buttons would overflow, ruining the aesthetic of the page. The login button in the top left hand corner can be used regardless if you register or not. Clicking on the login button, will open up a small menu, that will take you the user login page or the admin login page as required. The credentials for logging in as a user is as following: Username: user or user2 and Password: user or user2 respectively (Username: user and Password: user2 will not work, so the username and password used has to be the same). Once logged in as a user, the view will change in so far as there is a logout button. For now that's the only change, with more changes being apparent in phase 2 of the project. You can also login as an admin, with the following credentials: Username: admin and Password: admin. Once logged in, you will notice that the view has changed, as now there is a User List button. This User List view has not been implemented yet, however the idea behind it is that it will allow admins to add and remove users at will. Now for the register button, you can register as a clinic or a patient, as indicated when you click on the register button, it will open up a small menu which will give you the option of registering as one or the other. For now, none of the fields on the register page work for both views except the Username, Password and Repeat Password fields. If you are registering as a clinic, you can only register with the following credentials: Username: user, Password: user and Repeat Password: user. This will also be indicated by the view, if you try and register with any other credentials, it will let you know what is required of you. The same is true for the new patient view, however the credentials that are needed to register as a new patient are the following: Username: user2, Password: user2 and Repeat Password: user2. For now registering doesn't do anything, except redirect you to the home page once you have successfully registered, but in Phase 2, this view will be of more use.
