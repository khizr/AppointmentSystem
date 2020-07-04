import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from "react-router-dom";
import "./styles.css";

/* Component for the Map page */

class AdminLogin extends React.Component {

  state = {
    clinicUser: "",
    clinicPass: "",
    clinicRepeatPass:"",
    userError: "",
    passError:"",
    reapeatPassError:"",
    displayHelp: ""
  }

  successfullRegister = () => {
    
    
    if ( this.state.clinicUser === "user" && this.state.clinicPass === "user" && this.state.clinicRepeatPass === "user") {

      this.sucessfullRegister();
      setInterval(this.changeWindow, 4000);

    }

    if ( this.state.clinicUser === "user") {
      this.setState({
        userError: "false" 
      });
    }

    if ( this.state.clinicPass === "user") {
      this.setState({
        passError: "false" 
      });
    }

    if ( this.state.clinicRepeatPass === "user") {
      this.setState({
        repeatPassError: "false" 
      });
    }

    if ( this.state.clinicUser !== "user") {
      this.setState({
        userError: "true" 
      });
    }

    if ( this.state.clinicPass !== "user") {
      this.setState({
        passError: "true" 
      });
    }

    if ( this.state.clinicRepeatPass !== "user") {
      this.setState({
        repeatPassError: "true" 
      });
    }

  };

  sucessfullRegister = () => {

    alert("You have sucessfully registered! You will be redirected to the homepage in 5 seconds or press OK to be redirected immediately.");
    window.location.href="/";
  }

  changeWindow = () => {
    window.location.href="/";
  }

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
            endIcon={<HomeIcon />}>
            Home</Button>
        </Link>

        <div className="clinic_register_container"><h1 className="clinic_register_header">Create a New Account</h1></div>

        <div className="clinic_register">

          <div className="clinic_name_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Clinic Name" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="clinic_email_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Email" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="clinic_address_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Address" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="clinic_new_user_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="clinicUser"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.userError === "true"}
              helperText={this.state.userError === "true" ? 'Your Username Should Be user' : ''}
              />

            </form>

          </div>

          <div className="clinic_new_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="clinicPass" 
              id="filled-basic"
              label="New Password" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.passError === "true"}
              helperText={this.state.passError === "true" ? 'Your Password should be user' : ''}
              />
              

            </form>

          </div>

          <div className="clinic_repeat_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="clinicRepeatPass" 
              id="filled-basic"
              label="Repeat Password" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.repeatPassError === "true"}
              helperText={this.state.repeatPassError === "true" ? 'Your Password should be user' : ''}
              />
              

            </form>

          </div>
      
          <div className="clinic_register_button_container">
            <Button variant="contained"
            color="secondary" 
            fullWidth
            onClick={
              this.successfullRegister
            }
            endIcon={<AddCircleIcon />}>
            Register</Button>

          </div>

        </div>
      </div>
    );
  }
}
  
  export default AdminLogin;
