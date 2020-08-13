import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the all the major components of our web app
import Home from './react components/Home';
import Calendar from './react components/Calendar';
import Chat from './react components/Chat';
import StoresNearYou from './react components/StoresNearYou';
import AdminLogin from './react components/Admin Login';
import PatientLogin from './react components/Patient Login';
import ClinicLogin from './react components/Clinic Login';
import ClinicRegister from './react components/Clinic Registration';
import PatientRegister from './react components/Patient Registration';
import UserHome from './react components/User Home';
import AdminHome from './react components/Admin Home';

import { readCookie } from "./actions/readcookie";



class App extends React.Component {

    constructor(props) {
        super(props);
        readCookie(this); // sees if a user is logged in. 
    }

    // global state passed down includes the current logged in user.
    state = {
        home: "false",
        currentUser: null,
        usernameError: "false",
        passwordError: "false",
        repeatPassError: "false",
        userFormatError: "false",
        successfullRegister:"false"
    }

    render() {

        const { currentUser } = this.state;
        console.log(currentUser)

        return (
            <div>
            <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
                { /* Each Route below shows a different component depending on the exact path in the URL  */ }

                {/* Route to Home */}
                <Route exact path='/'
                    render={({ history }) => (
                        <div>
                            {<Home history={history}/>}
                        </div>
                            
                    )}
                />

                {/* Routes to User Home if user is logged in, otherwise goes to Patient Login page*/}
                <Route
                    exact path={["/patientlogin", "/userhome"] /* any of these URLs are accepted. */ }
                    render={({ history }) => (
                        <div>
                            { /* Different componenets rendered depending on if someone is logged in. */}
                            {!currentUser ? <PatientLogin history={history} app={this}/> : <UserHome history={history} app={this}/> }
                        </div>
                        
                    )}
                />
                
                {/* Routes to User Home if user is logged in, otherwise goes to Clinic Login page*/}
                <Route
                    exact path={["/cliniclogin", "/userhome"] /* any of these URLs are accepted. */ }
                    render={({ history }) => (
                        <div>
                            { /* Different componenets rendered depending on if someone is logged in. */}
                            {!currentUser ? <ClinicLogin history={history} app={this} />: <UserHome history={history} app={this}/>}
                        </div>
                        
                    )}
                />

                <Route exact path='/Calendar'>
                    <Calendar/>
                </Route>

                <Route exact path='/StoresNearYou'>
                    <StoresNearYou/>
                </Route>

                <Route exact path='/Chat'>
                    <Chat/>
                </Route>

                
                <Route exact path='/adminlogin'
                    render={({ history }) => (
                        <div>
                            {<AdminLogin history={history}/>}
                        </div>
                            
                    )}
                />

                <Route exact path= '/registerclinic'
                    render={({ history }) => (
                        <div>
                           <ClinicRegister history={history} app={this}/>
                        </div>
                            
                    )}
                />

                <Route exact path='/registerpatient'
                    render={({ history }) => (
                        <div>
                            {<PatientRegister history={history} app={this}/>}
                        </div>
                            
                    )}
                />

                <Route exact path='/Admin Home'>
                    <AdminHome/>
                </Route>

                
            </Switch>
            </BrowserRouter>
        </div>
        );  
    }
}

export default App;
