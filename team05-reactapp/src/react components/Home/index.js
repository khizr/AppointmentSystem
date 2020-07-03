import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EventIcon from '@material-ui/icons/Event';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Banner from "./static/banner.png"
import HomeContent from "./../Home Content";
import styles from "./styles";

// import styles from "./styles"
import "./styles.css";

/* Component for the Home page */

class Home extends React.Component {

    render() {
      return (
        <div className="home__bg center">
          <img className="home_banner" src={Banner} alt="Banner" />;
          <HomeContent></HomeContent>
          <Link className="component__button-link" to={"./../Calendar"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button"
            endIcon={<EventIcon />}>
            Calendar
            </Button>
          </Link>

          <Link className="component__button-link" to={"./../Chat"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button"
            endIcon={<ChatIcon />}>
            Chat</Button>
          </Link>

          <Link className="component__button-link" to={"./../Map"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button"
            endIcon={<MapIcon />}>
            Clinics Near You</Button>
          </Link>

          <Link className="component__button-link" to={"./../Admin Login"}>
            <Button variant="contained"
              color="secondary"
              style={styles.buttonStyle}
              className="button_log_reg"
              endIcon={<VpnKeyIcon />}>
              Login</Button>
          </Link>

          <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_log_reg"
            endIcon={<AddCircleIcon />}>
            Register</Button>    

        </div>
      );
    }
  }
  
  export default Home;