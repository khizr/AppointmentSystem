import React from "react";
import Clndr from "./Clndr";
import "./styles.css";
import Logo from "./sampleLogo.png";

/* Component for the Calendar page */
class Calendar extends React.Component {
    render() {
      return (
        <div>
        <div className="banner"><img src={Logo} alt="Clinic Logo"></img>
        <div className="clinicName">Company Name</div>
        <div className="clinicNumber">Company Number</div>
        </div>
        <Clndr></Clndr>
        </div>
      );
    }
  }  
  export default Calendar;