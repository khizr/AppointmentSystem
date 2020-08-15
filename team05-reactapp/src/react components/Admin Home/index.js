import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EventIcon from '@material-ui/icons/Event';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Banner from "./static/banner.png"
import HomeContent from "./../Home Content";
import styles from "./styles";
import {logout} from "../../actions/admin";

// import styles from "./styles"
import "./styles.css";

/* Component for the Admin Home page */

class AdminHome extends React.Component {

    constructor(props) {
      super(props);
      this.props.history.push("/adminhome");
    }

    // logs out the admin
    logoutAdmin = (app) => {
      this.props.history.push("/");
      logout(app);
    } 

    render() {
      const { app } = this.props
  
      return (
        <div className="home__bg center">
          <img className="admin_home_banner" src={Banner} alt="Banner" />;
          <HomeContent></HomeContent>

            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_admin_home"
            endIcon={<AccessibilityIcon />}>
            User List</Button>

            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="admin_button_logout"
            onClick={() => this.logoutAdmin(app)}
            endIcon={<ExitToAppIcon />}>
            Logout</Button>
           

        </div>
      );
    }
  }
  
  export default AdminHome;