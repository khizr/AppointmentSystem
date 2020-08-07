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
import UserLogin from './react components/User Login';
import ClinicRegister from './react components/Clinic Registration';
import PatientRegister from './react components/Patient Registration';
import UserHome from './react components/User Home';
import AdminHome from './react components/Admin Home';

import { readCookie } from "./actions/user";



class App extends React.Component {

    constructor(props) {
        super(props);
        readCookie(this); // sees if a user is logged in.
    }

    // global state passed down includes the current logged in user.
    state = {
        currentUser: null
    }

    render() {

        const { currentUser } = this.state;

        return (
            <div>
            <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
                { /* Each Route below shows a different component depending on the exact path in the URL  */ }
                <Route
                        exact path={["/"] /* any of these URLs are accepted. */ }
                        render={({ history }) => (
                            <div className="app">
                                { /* Different componenets rendered depending on if someone is logged in. */}
                                {!currentUser ? <Home history={history} app={this} /> : <UserLogin history={history} app={this} />}
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

                
                <Route exact path='/Admin Login'>
                    <AdminLogin/>
                </Route>

                <Route exact path='/User Login'>
                    <UserLogin/>
                </Route>

                <Route exact path='/Clinic Registration'>
                    <ClinicRegister/>
                </Route>

                <Route exact path='/Patient Registration'>
                    <PatientRegister/>
                </Route>

                <Route exact path='/User Home'>
                    <UserHome/>
                </Route>

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
