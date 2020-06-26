import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import "./styles.css";

/* Component for the Map page */
class Map extends React.Component {
    render() {
      return (
        <div className="home__bg center">
          <h1>Search For Your Closest Clinic</h1>
          <div id= "round-container">
            <TextField id="filled-basic" label="Enter Your Postal Code" variant="filled"  />
            <button style={{ borderRadius: 50}} className="button">
                <SearchIcon />
            </button>
          </div>
          <div id = "round-container2">
            <h2>Closest Clinics to You Are:</h2>
          </div>
        </div>
      );
    }
  }
  
  export default Map;