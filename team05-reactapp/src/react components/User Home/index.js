import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EventIcon from '@material-ui/icons/Event';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Banner from "./static/banner.png"
import HomeContent from "./../Home Content";
import styles from "./styles";
import {logout} from "../../actions/patient";

// import styles from "./styles"
import "./styles.css";

/* Component for the User Home page */

class UserHome extends React.Component {

  constructor(props) {
    super(props);
    this.props.history.push("/userhome");
  }

  // logs out the user
    logoutUser = (app) => {
      this.props.history.push("/");
      logout(app);
    } 

    render() {
      const { app } = this.props
  
      return (
        <div className="home__bg center">
          <img className="user_home_banner" src={Banner} alt="Banner" />;
          <HomeContent></HomeContent>
          <Link className="component__button-link" to={"./../Calendar"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_user_home"
            endIcon={<EventIcon />}>
            Calendar
            </Button>
          </Link>

          <Link className="component__button-link" to={"./../Chat"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_user_home"
            endIcon={<ChatIcon />}>
            Chat</Button>
          </Link>

          <Link className="component__button-link" to={"./../StoresNearYou"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_user_home"
            endIcon={<MapIcon />}>
            Clinics Near You</Button>
          </Link>

          <Button variant="contained"
          color="secondary" 
          style={styles.buttonStyle}
          className="button_logout"
          onClick={() => this.logoutUser(app)}
          endIcon={<ExitToAppIcon />}>
          Logout</Button>
           

        </div>
      );
    }
  }
  
  export default UserHome;