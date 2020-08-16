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

import { readCookieClinic, readCookieAdmin, readCookiePatient } from "./actions/readcookie";



class App extends React.Component {

    constructor(props) {
        super(props);
        readCookieClinic(this);
        readCookiePatient(this);
        readCookieAdmin(this); 
    }

    // global state passed down includes the current logged in user.
    state = {
        home: "false",
        currentClinic: null,
        currentPatient: null,
        currentAdmin: null,
        usernameError: "false",
        passwordError: "false",
        repeatPassError: "false",
        userFormatError: "false",
        successfullRegister:"false"
    }
    
    checkPatient = (history) => {
        if (this.state.currentAdmin) {
            return <AdminHome history={history} app={this}/>
        }
        else if (this.state.currentClinic || this.state.currentPatient) {
            return <UserHome history={history} app={this}/>
        }
        else {
            return <PatientLogin history={history} app={this}/>
        }
    }

    checkClinic = (history) => {
        if (this.state.currentAdmin) {
            return <AdminHome history={history} app={this}/>
        }
        else if (this.state.currentClinic || this.state.currentPatient) {
            return <UserHome history={history} app={this}/>
        }
        else {
            return <ClinicLogin history={history} app={this}/>
        }
    }

    checkAdmin = (history) => {
        if (this.state.currentAdmin) {
            return <AdminHome history={history} app={this}/>
        }
        else if (this.state.currentClinic || this.state.currentPatient) {
            return <UserHome history={history} app={this}/>
        }
        else {
            return <AdminLogin history={history} app={this}/>
        }
    }

    render() {

        const { currentUser } = this.state;

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
                            {this.checkPatient(history)}
                        </div>
                        
                    )}
                />
                
                {/* Routes to User Home if user is logged in, otherwise goes to Clinic Login page*/}
                <Route
                    exact path={["/cliniclogin", "/userhome"] /* any of these URLs are accepted. */ }
                    render={({ history }) => (
                        <div>
                            { /* Different componenets rendered depending on if someone is logged in. */}
                            {this.checkClinic(history)}
                        </div>
                        
                    )}
                />

                {/* Routes to Admin Home if admin is logged in, otherwise goes to Admin Login page*/}
                <Route exact path={["/adminlogin", "/adminhome"]}
                    render={({ history }) => (
                        <div>
                            {this.checkAdmin(history)}
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
                    <Chat app={this.state}/>
                </Route>

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
                
            </Switch>
            </BrowserRouter>
        </div>
        );  
    }
}

export default App;
