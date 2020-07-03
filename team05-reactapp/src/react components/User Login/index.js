import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Banner from "./static/banner.png"
import { Link } from "react-router-dom";
import "./styles.css";

/* Component for the Map page */
class AdminLogin extends React.Component {
    render() {
      return (
        <div className="home__bg center">
          <Link className="component__button-link" to={"./"}>
              <Button variant="contained"
              color="secondary" 
              style={{ borderRadius: 50}}
              className="homeButton"
              endIcon={<HomeIcon />}>
              Home</Button>
          </Link>

          <div className="admin_login">

            <div className="banner_container">
              <img src={Banner} alt="Banner" />;
            </div>

          

            <div className="admin_user_field_container">

              <form noValidate autoComplete="off">

                <TextField 
                id="filled-basic" 
                label="Username" 
                variant="filled" 
                fullWidth="true"/>

              </form>

            </div>

            <div className="admin_pass_field_container">

              <form noValidate autoComplete="off">

                <TextField id="filled-basic"
                // error 
                label="Password" 
                variant="filled" 
                fullWidth="true"
                // helperText="Incorrect Password."
                />
                

              </form>

            </div>
        
            <div className="admin_login_button_container">
              <Button variant="contained"
              color="secondary" 
              fullWidth="true"
              className="admin_login_button"
              endIcon={<VpnKeyIcon />}>
              Login</Button>

            </div>

          </div>
          {/* //  onClick={this.handleInputChange} 
          //  style={ {backgroundImage: "url(" + this.state.image + ")" , backgroundSize: 'cover'} }> */}
          
          {/* <div className="con">
            <Link className="component__button-link" to={"./"}>
              <Button variant="contained"
              color="secondary" 
              style={{ borderRadius: 50}}
              className="homeButton"
              endIcon={<HomeIcon />}>
              Home</Button>
            </Link>
          </div>
          <h1>Search For Your Closest Clinic</h1>
          <div id= "round-container">
            <TextField id="filled-basic" label="Enter Your Postal Code" variant="filled"  />
            <button style={{ borderRadius: 50}} className="button">
                <SearchIcon />
            </button>
          </div>
          <div id = "round-container2">
            <h2>Closest Clinics to You Are:</h2>
            <table>
              <tr>
                <th>Clinic</th>
                <th>Location</th>
                <th>Book An Appointment</th>
              </tr>
              <tr>
                <td><b>Mahfooz Clinic</b></td>
                <td>123 Bay St</td>
                <td><button className="bookButton">Book Now</button></td>
              </tr>
              <tr>
                <td><b>Cloud Clinic</b></td>
                <td>123 Recovery Street</td>
                <td><button className="bookButton">Book Now</button></td>
              </tr>
              <tr>
                <td><b>Fast Healing Walk-in</b></td>
                <td>333 close to you St</td>
                <td><button className="bookButton">Book Now</button></td>
              </tr>
          </table>
          </div> */}
        </div>
      );
    }
  }
  
  export default AdminLogin;

  /* Next Steps:
    Add Back to Home Icon
    Only show table once location is put in and search is hit
    Make list of arbirtary acceptable postal codes
    Make list of clinics that have arbritary locations
    Make table according to increasing distance
    Allow a search within range limit when searching
    Book Now button should take you to respective clinics calendar (hamza make user and user bookings table when login)
    */