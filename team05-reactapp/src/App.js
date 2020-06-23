import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the all the major components of our web app
import Home from './react components/Home';
import Calendar from './react components/Calendar';
import Chat from './react components/Chat';
import Map from './react components/Map';


class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
//   state = {
//     abc: "123"
//   }

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
            
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
