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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from "./styles";

// import styles from "./styles"
import "./styles.css";

/* Component for the Home page */

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.props.history.push("/")
    }

    state = {

      login: null,
      register: null
    }

    // logs out the user
    patientLogin = () => {
      this.props.history.push("/patientlogin");
    }
    
    clinicLogin = () => {
      this.props.history.push("/cliniclogin");
    }
    
    adminLogin = () => {
      this.props.history.push("/adminlogin");
    }
    
    clinicRegistration = () => {
      this.props.history.push("/registerclinic");
    }
    
    patientRegistration = () => {
      this.props.history.push("/registerpatient");
    } 

    handleClick = event => {
    
      const target = event.currentTarget;
      const name = target.name;
  
      this.setState({
        [name]: event.currentTarget
      });
  
  
    };

    handleClose = () => {

      this.setState({
        login: null,
        register:null
      });
    }

    render() {
  
      return (
        <div className="home__bg center">
          <img className="home_banner" src={Banner} alt="Banner" />
          <HomeContent></HomeContent>
          <Link className="component__button-link" to={"./../Calendar"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_home"
            endIcon={<EventIcon />}>
            Calendar
            </Button>
          </Link>

          <Link className="component__button-link" to={"./../Chat"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_home"
            endIcon={<ChatIcon />}>
            Chat</Button>
          </Link>

          <Link className="component__button-link" to={"./../StoresNearYou"}>
            <Button variant="contained"
            color="secondary" 
            style={styles.buttonStyle}
            className="button_home"
            endIcon={<MapIcon />}>
            Clinics Near You</Button>
          </Link>

          
          <Button name="login"
            variant="contained"
            color="secondary"
            style={styles.buttonStyle}
            className="button_home_log_reg"
            onClick={this.handleClick} 
            endIcon={<VpnKeyIcon />}>  
            Login</Button>

          <Menu
            id="simple-menu"
            anchorEl={this.state.login}
            keepMounted
            open={Boolean(this.state.login)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.patientLogin}>Patient Login</MenuItem>
            <MenuItem onClick={this.clinicLogin}>Clinic Login</MenuItem>
            <MenuItem onClick={this.adminLogin}>Admin Login</MenuItem>

          </Menu>

          
          <Button name="register"
          variant="contained"
          color="secondary" 
          style={styles.buttonStyle}
          className="button_home_log_reg"
          onClick={this.handleClick} 
          endIcon={<AddCircleIcon />}>
          Register</Button>

          <Menu
            id="simple-menu"
            anchorEl={this.state.register}
            keepMounted
            open={Boolean(this.state.register)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.clinicRegistration}>New Clinic</MenuItem>
            <MenuItem onClick={this.patientRegistration}>New Patient</MenuItem>

          </Menu>
           

        </div>
      );
    }
  }
  
  export default Home;