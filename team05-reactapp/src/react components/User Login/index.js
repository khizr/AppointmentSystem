import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Banner from "./static/banner.png"
import { Link } from "react-router-dom";
import "./styles.css";

import { updateLoginForm, login } from "../../actions/user";

/* Component for the Map page */
class userLogin extends React.Component {

  // state = {
  //   userUser: "",
  //   userPass: "",
  //   incorrectUser: "",
  //   incorrectPass:"",
  //   userError: "",
  //   passError:"",
  //   displayHelp: ""
  // }

  // successfullLogin = () => {
    
    
  //   if ( (this.state.userUser === "user" && this.state.userPass === "user") |  (this.state.userUser === "user2" && this.state.userPass === "user2") ) {
  //     window.location.href="./../User Home";
  //   }

  //   if ( this.state.userUser === "user" | this.state.userUser === "user2") {
  //     this.setState({
  //       userError: "false" 
  //     });
  //   }

  //   if ( this.state.userPass === "user" | this.state.userUser === "user2") {
  //     this.setState({
  //       passError: "false" 
  //     });
  //   }

  //   if ( this.state.userUser !== "user" && this.state.userUser !== "user2") {
  //     this.setState({
  //       userError: "true" 
  //     });
  //   }

  //   if ( this.state.userPass !== "user" && this.state.userUser !== "user2") {
  //     this.setState({
  //       passError: "true" 
  //     });
  //   }

  // };

  // handleInputChange = event => {
    
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });


  // };

  constructor(props) {
    super(props);
    this.props.history.push("/login");
  }

  // login form state
  state = {
    email: "",
    password: ""
  }


  render() {

    const { app } = this.props

    return (
      <div className="home__bg center">
        <Link className="component__button-link" to={"./"}>
            <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            endIcon={<HomeIcon />}>
            Home</Button>
        </Link>

        <div className="user_login">

          <div className="banner_container">
            <img src={Banner} alt="Banner" />;
          </div>

        

          <div className="user_user_field_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="userUser"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={e => updateLoginForm(this, e.target)}
              // onChange={this.handleInputChange}
              // error={this.state.userError === "true"}
              // helperText={this.state.userError === "true" ? 'Incorrect Username' : ''}
              />

            </form>

          </div>

          <div className="user_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="userPass" 
              id="filled-basic"
              label="Password" 
              variant="filled" 
              fullWidth
              onChange={e => updateLoginForm(this, e.target)}
              // onChange={this.handleInputChange}
              // error={this.state.passError === "true"}
              // helperText={this.state.passError === "true" ? 'Incorrect Password' : ''}
              />
              

            </form>

          </div>
      
          <div className="user_login_button_container">
            <Button variant="contained"
            color="secondary" 
            fullWidth
            onClick={() => login(this, app)}
            // onClick={
            //   this.successfullLogin
            // }
            endIcon={<VpnKeyIcon />}>
            Login</Button>

          </div>

        </div>
      </div>
    );
  }
}
  
  export default userLogin;
