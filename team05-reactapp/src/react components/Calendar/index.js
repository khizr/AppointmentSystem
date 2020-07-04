import React from "react";
import Clndr from "./Clndr";
import "./styles.css";
import Logo from "./sampleLogo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';


/* Component for the Calendar page */
class Calendar extends React.Component {
    render() {
      return (
        <div>
          <div className="bannerUzi">
            <img className = "myImage" src={Logo} alt="Clinic Logo"></img>
            <span className = "buttonHome">
              <Link className="component__button-link" to={"./"}>
                <Button variant="contained"
                color="secondary" 
                style={{ borderRadius: 50}}
                className="homeButton"
                endIcon={<HomeIcon />}>
                Home</Button>
              </Link>
            </span>
          <div className="clinicName">Company Name</div>
          <div className="clinicNumber">Company Number</div>
          </div>
          <Clndr></Clndr>
        </div>
      );
    }
  }  
  export default Calendar;