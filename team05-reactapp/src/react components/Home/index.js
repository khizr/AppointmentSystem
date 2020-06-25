import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EventIcon from '@material-ui/icons/Event';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import banner from "./static/banner.png"
import HomeContent from "./../Home Content";
// import { makeStyles } from '@material-ui/core/styles';

// import styles from "./styles"
import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
    render() {
      return (
        <div className="home__bg center">
          <HomeContent></HomeContent>
          <img className="home_banner" src={banner} alt="Banner" />;
          <Link className="component__button-link" to={"./../Calendar"}>
            <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            className="button"
            endIcon={<EventIcon />}>
            Calendar
            </Button>
            
          </Link>

          <Link className="component__button-link" to={"./../Chat"}>
            <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            className="button"
            endIcon={<ChatIcon />}>
            Chat</Button>
          </Link>

          <Link className="component__button-link" to={"./../Map"}>
            <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            className="button"
            endIcon={<MapIcon />}>
            Map</Button>
          </Link>

          <Button variant="contained"
            color="secondary"
            style={{ borderRadius: 50}}
            className="button_log_reg"
            endIcon={<VpnKeyIcon />}>
            Login</Button>

          <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            className="button_log_reg"
            endIcon={<AddCircleIcon />}>
            Register</Button>    

        </div>
      );
    }
  }
  
  export default Home;