import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from "react-router-dom";
import "./styles.css";

import { updateForm, register } from "../../actions/clinic";

/* Component for the Map page */

class ClinicRegister extends React.Component {

  constructor(props) {
    super(props);
    this.props.history.push("/registerclinic");
    this.repeatPass = "";
    this.userRegex = /^user(?!1\b)\d*[13579]$/
  }

  // register form state
  state = {
    name: "",
    address: "",
    username: "",
    password: ""
  }

  // Pushes home link into prop, redirects page to home
  goHome = () => {
    this.props.history.push("/");
  }

  // Sets the repeat pass in the registration form
  setRepeatPass = event => {
    
    const target = event.target;
    const value = target.value;

    this.repeatPass = value;

  };

  // Checks for sucessfull registration
  successfullRegister = (app) => {

    // Username does not follow format
    if (!this.userRegex.test(this.state.username)) {
      app.setState({
        userFormatError: "true"
      })
    }
    else {
      app.setState({
        userFormatError: "false"
      })
    }

    // if username does not match password, set password error to true, else set the error to false
    if (this.state.username !== this.state.password) {
      app.setState({
        passwordError:"true"
      })
    }
    else {
      app.setState({
        passwordError:"false"
      })
    }

    // If new password does not match the repeated password, set repeat password error to true, else set the error to false
    if (this.state.password !== this.repeatPass) {
      app.setState({
        repeatPassError:"true"
      })
    }
    else {
      app.setState({
        repeatPassError:"false"
      })
    }

    // If all fields are correctly filled out, then send a registration request to the server
    if (this.userRegex.test(this.state.username) && this.state.username === this.state.password && this.state.password === this.repeatPass) {
      register(this, app);
    }

    setTimeout( () => {

      if (app.state.successfullRegister == "true") {

        app.setState({
          successfullRegister:"false"
        })
        
       
        alert("Registration Successfull! Press OK to be redirected to the home page.")

        this.goHome();
  
      }

    }, 1000)

  }

  render() {

    const { app } = this.props

    return (
      <div className="home__bg center">

        <Button variant="contained"
          color="secondary" 
          style={{ borderRadius: 50}}
          onClick={this.goHome}
          endIcon={<HomeIcon />}>
          Home</Button>

        <div className="clinic_register_container"><h1 className="clinic_register_header">Create a New Account</h1></div>

        <div className="clinic_register">

          <div className="clinic_name_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="name"
              id="filled-basic" 
              label="Clinic Name"
              onChange={e => updateForm(this, e.target)} 
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
              name="address"
              id="filled-basic" 
              label="Address" 
              variant="filled"
              onChange={e => updateForm(this, e.target)} 
              fullWidth
              />

            </form>

          </div>

          <div className="clinic_new_user_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="username"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={e => updateForm(this, e.target)}
              error={app.state.usernameError === "true" || app.state.userFormatError === "true"}
              helperText={app.state.usernameError === "true" ? 'Username already exists' : '' || 
              app.state.userFormatError === "true" ? 'Username should be of format user<positive odd number starting at 3>' : ''}
              />

            </form>

          </div>

          <div className="clinic_new_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="password" 
              id="filled-basic"
              label="New Password" 
              variant="filled" 
              fullWidth
              onChange={e => updateForm(this, e.target)}
              error={app.state.passwordError === "true"}
              helperText={app.state.passwordError === "true" ? 'Password does not match username' : ''}
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
              onChange={this.setRepeatPass}
              error={app.state.repeatPassError === "true"}
              helperText={app.state.repeatPassError === "true" ? 'Password does not match new password' : ''}
              />
              
            </form>

          </div>
      
          <div className="clinic_register_button_container">
            <Button variant="contained"
            color="secondary" 
            fullWidth
            onClick={() => this.successfullRegister(app)}
            endIcon={<AddCircleIcon />}>
            Register</Button>

          </div>

        </div>
      </div>
    );
  }
}
  
  export default ClinicRegister;
