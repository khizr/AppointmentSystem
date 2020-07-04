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

  state = {
    adminUser: "",
    adminPass: "",
    incorrectUser: "",
    incorrectPass:"",
    userError: "",
    passError:"",
    displayHelp: ""
  }

  successfullLogin = () => {
    
    
    if ( this.state.adminUser === "admin" && this.state.adminPass === "admin") {
      window.location.href="/Admin Home";
    }

    if ( this.state.adminUser === "admin") {
      this.setState({
        userError: "false" 
      });
    }

    if ( this.state.adminPass === "admin") {
      this.setState({
        passError: "false" 
      });
    }

    if ( this.state.adminUser !== "admin") {
      this.setState({
        userError: "true" 
      });
    }

    if ( this.state.adminPass !== "admin") {
      this.setState({
        passError: "true" 
      });
    }

  };

  handleInputChange = event => {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });


  };

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
              name="adminUser"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.userError === "true"}
              helperText={this.state.userError === "true" ? 'Incorrect Username' : ''}
              />

            </form>

          </div>

          <div className="admin_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="adminPass" 
              id="filled-basic"
              label="Password" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.passError === "true"}
              helperText={this.state.passError === "true" ? 'Incorrect Password' : ''}
              />
              

            </form>

          </div>
      
          <div className="admin_login_button_container">
            <Button variant="contained"
            color="secondary" 
            fullWidth
            onClick={
              this.successfullLogin
            }
            endIcon={<VpnKeyIcon />}>
            Login</Button>

          </div>

        </div>
      </div>
    );
  }
}
  
  export default AdminLogin;
