import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Banner from "./static/banner.png"
import "./styles.css";

import { updateForm, login } from "../../actions/admin";

/* Component for the Map page */
class AdminLogin extends React.Component {

  constructor(props) {
    super(props);
    this.props.history.push("/adminlogin");
  }

  // login form state
  state = {
    username: "",
    password: ""
  }

  // Pushes home link into prop, redirects page to home
  goHome = () => {
    this.props.history.push("/");
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

        <div className="admin_login">

          <div className="banner_container">
            <img src={Banner} alt="Banner" />;
          </div>

        

          <div className="admin_user_field_container">

            <form noValidate autoComplete="off">

              <TextField 
              name="username"
              id="filled-basic" 
              label="Username" 
              variant="filled" 
              fullWidth
              onChange={e => updateForm(this, e.target)}
              error={app.state.usernameError === "true"}
              helperText={app.state.usernameError === "true" ? 'Username Not Found' : ''}
              />

            </form>

          </div>

          <div className="admin_pass_field_container">

            <form noValidate autoComplete="off">

              <TextField
              name="password" 
              id="filled-basic"
              label="Password" 
              variant="filled" 
              type="password" 
              fullWidth
              onChange={e => updateForm(this, e.target)}
              error={app.state.passwordError === "true"}
              helperText={app.state.passwordError === "true" ? 'Incorrect Password' : ''}
              />
              

            </form>

          </div>
      
          <div className="admin_login_button_container">
            <Button variant="contained"
            color="secondary" 
            fullWidth
            onClick={() => login(this, app)}
            endIcon={<VpnKeyIcon />}>
            Login</Button>

          </div>

        </div>
      </div>
    );
  }
}
  
  export default AdminLogin;
