import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the all the major components of our web app
import Home from './react components/Home';
import Calendar from './react components/Calendar';
import Chat from './react components/Chat';
import Map from './react components/Map';
import AdminLogin from './react components/Admin Login';
import UserLogin from './react components/User Login';
import ClinicRegister from './react components/Clinic Registration';
import PatientRegister from './react components/Patient Registration';



class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
//   state = {
//     abc: "123"
//   }

  state = {
    patients: [],
    clinics:[]
  }


  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/'> 
                <Home/>
            </Route>

            <Route exact path='/Calendar'>
                <Calendar/>
            </Route>

            <Route exact path='/Map'>
                <Map/>
            </Route>

            <Route exact path='/Chat'>
                <Chat/>
            </Route>

            
            <Route exact path='/Admin Login'>
                <AdminLogin/>
            </Route>

            <Route exact path='/User Login'>
                <UserLogin state={this.state}/>
            </Route>

            <Route exact path='/Clinic Registration'>
                <ClinicRegister/>
            </Route>

            <Route exact path='/Patient Registration'>
                <PatientRegister/>
            </Route>
            
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
