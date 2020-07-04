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
    patientUser: "",
    patientPass: "",
    patientRepeatPass:"",
    userError: "",
    passError:"",
    reapeatPassError:"",
    displayHelp: ""
  }

  successfullRegister = () => {
    
    
    if ( this.state.patientUser === "user2" && this.state.patientPass === "user2" && this.state.patientRepeatPass === "user2") {

      this.sucessfullRegister();
      setInterval(this.changeWindow, 4000);

    }

    if ( this.state.patientUser === "user2") {
      this.setState({
        userError: "false" 
      });
    }

    if ( this.state.patientPass === "user2") {
      this.setState({
        passError: "false" 
      });
    }

    if ( this.state.patientRepeatPass === "user2") {
      this.setState({
        repeatPassError: "false" 
      });
    }

    if ( this.state.patientUser !== "user2") {
      this.setState({
        userError: "true" 
      });
    }

    if ( this.state.patientPass !== "user2") {
      this.setState({
        passError: "true" 
      });
    }

    if ( this.state.patientRepeatPass !== "user2") {
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

    console.log(this.state.patientRepeatPass);


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

        <div className="patient_register_container"><h1 className="patient_register_header">Create a New Account</h1></div>

        <div className="patient_register">

          <div className="patient_first_name_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="First Name" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="patient_last_name_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Last Name" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="patient_email_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Email" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="patient_address_container">

            <form noValidate autoComplete="off">

              <TextField 
              id="filled-basic" 
              label="Address" 
              variant="filled" 
              fullWidth
              />

            </form>

          </div>

          <div className="patient_new_user_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="patientUser"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.userError === "true"}
              helperText={this.state.userError === "true" ? 'Your Username Should Be user2' : ''}
              />

            </form>

          </div>

          <div className="patient_new_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="patientPass" 
              id="filled-basic"
              label="New Password" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.passError === "true"}
              helperText={this.state.passError === "true" ? 'Your Password should be user2' : ''}
              />
              

            </form>

          </div>

          <div className="patient_repeat_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="patientRepeatPass" 
              id="filled-basic"
              label="Repeat Password" 
              variant="filled" 
              fullWidth
              onChange={this.handleInputChange}
              error={this.state.repeatPassError === "true"}
              helperText={this.state.repeatPassError === "true" ? 'Your Password should be user2' : ''}
              />
              

            </form>

          </div>
      
          <div className="patient_register_button_container">
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
