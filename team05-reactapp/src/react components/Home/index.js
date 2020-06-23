import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
    render() {
      return (
        <div className="home__bg center">

          <Link className="component__button-link" to={"./../Calendar"}>
            <Button className="component__button">Calendar</Button>
          </Link>

          <Link className="component__button-link" to={"./../Chat"}>
            <Button className="component__button">Chat</Button>
          </Link>

          <Link className="component__button-link" to={"./../Map"}>
            <Button className="component__button">Map</Button>
          </Link>

          <Button className="component__button">Login</Button>

          <Button className="component__button">Register</Button>    

        </div>
      );
    }
  }
  
  export default Home;