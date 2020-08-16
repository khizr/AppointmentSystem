import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import Slider from '@material-ui/core/Slider';
import Geocode from "react-geocode";
import "./styles.css";

//distance function from https://www.geodatasource.com/developers/javascript
function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

class Clinic extends React.Component{
  
  render(){
    return(
      <tr>
        <td><b>{this.props.name}</b></td>
        <td>{this.props.address}</td>
        <td>{this.props.distance} Km</td>
        <td><Link to={"./Calendar"}><button className="bookButton">Book Now</button></Link></td>
      </tr>
    )
  }
}
[]

// getClinics = () => {
//   // the URL for the request
//   const url = '/StoresNearYou';

//   // Since this is a GET request, simply call fetch on the URL
//   fetch(url)
//   .then((res) => { 
//       if (res.status === 200) {
//           // return a promise that resolves with the JSON body
//           return res.json() 
//       } else {
//           alert('Could not get bookings')
//       }                
//   })
//   .then((json) => {  // tbookingshe resolved promise with the JSON body      
//       json.clinics.map((s) => {
//           clinics.append(<Clinic name="Collegeway Clinic" address="2686 The Collegeway, Mississauga, ON L5L 2M9" postal="L5L 2M9" distance="0" />)
//       })
//   }).catch((error) => {
//       console.log(error)
//   })
// }

let clinics = [<Clinic name="Collegeway Clinic" address="2686 The Collegeway, Mississauga, ON L5L 2M9" postal="L5L 2M9" distance="0" />, 
<Clinic name="New Life Clinic" address="2655 Liruma Rd Unit 4, Mississauga, ON L5K 1Y8" postal="L5K 1Y8" distance="0"/>,
<Clinic name="Therahands Health Clinic" address="Ridgeway Dr, Mississauga, ON L5L 5M6" postal="L5L 5M6" distance="0"/>]
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postal: "", myClinics: clinics}
  }
  static getDerivedStateFromProps(props, state) {
    return {postal: props.postal, myClinics: props.myClinics};
  }
  reload = () => {
    window.location.reload();
  }
  render() {
    return (
      <div>
      <div id = "round-container2">
            <h2>Closest Clinics to You Are:</h2>
            <table>
              <tr>
                <th>Clinic</th>
                <th>Location</th>
                <th>Distance From You</th>
                <th>Book An Appointment</th>
              </tr>
              {this.state.myClinics}
          </table>
      </div>
        <button style={{ borderRadius: 50}} className="button" onClick={this.reload}>
        <h2>Search Again</h2>
        </button>
      </div>
    );
  }
}


class StoresNearYou extends React.Component {
    constructor(props) {
      super(props);
      this.props.history.push("/StoresNearYou")
      this.state = {show: false, postal: '', showSearch: true, maxDistance: 3};
    }

    // Pushes home link into prop, redirects page to home
    goHome = () => {
      this.props.history.push("/");
    }

    reload = () => {
      window.location.reload();
    }

    showTable = () => {
      let myLat;
      let myLng;
      let myLat2;
      let myLng2;
      let errFlag = false;
      async function wrapper(postal, obj) {

        console.log(postal)
        let resp = Geocode.fromAddress(postal).then(
          response => {
            myLat = response.results[0].geometry.location.lat;
            myLng = response.results[0].geometry.location.lng;
          },
          error => {
            alert("Not a Valid Postal Code")
            errFlag = true;
          }
        
        );
        let result = await resp
        if(!errFlag){
          let clinic;
          for (let i =0; i < clinics.length; i++){
                
                let resp2 = Geocode.fromAddress(clinics[i].props.postal).then(
                  response => {
                    clinic = clinics[i]
                    myLat2 = response.results[0].geometry.location.lat;
                    myLng2 = response.results[0].geometry.location.lng;
                    let dist = distance(myLat, myLng, myLat2, myLng2, "K")
                    
                    if (dist > obj.state.maxDistance){
                      clinics.splice(i)
                    }else{
                      clinics[i] = (<Clinic name={clinic.props.name} address={clinic.props.address} postal={clinic.props.postal} distance={Math.round(dist * 10) / 10} />) 
                    }
                  },
                  error => {
                    alert("Not a Valid Postal Code")
                  }
                );
                let result2 = await resp2
                console.log(myLat2, myLng2)
          }

          clinics.sort(function(clinic, otherClinic){
            if(clinic.props.distance > otherClinic.props.distance){
                return 1
            }else if (clinic.props.distance < otherClinic.props.distance){
                return -1
            }
            return 0
          })
          obj.setState({showSearch: false});
          obj.setState({show:true})
        }
        

      }

      wrapper(this.state.postal, this);
    }
    
    savePostal = (event) => {
      this.setState({postal: event.target.value});
    }

    render() {
      let clinicsTable;
      let searchBar;
      let slider;

      Geocode.setApiKey("AIzaSyAmA7r2_y6oIClRhZiM_pOzbPA2aN_53qk");
      Geocode.setLanguage("en");


      if (this.state.show) {
        clinicsTable = <Table postal={this.state.postal}
                        myClinics={clinics}/>;
        if(clinics.length === 0){
          clinicsTable = <div>
          <div id = "round-container2">
                <h1>No Clinics Found</h1>
          </div>
            <button style={{ borderRadius: 50}} className="button" onClick={this.reload}>
            <h2>Search Again</h2>
            </button>
          </div>;
        }
      };
      if (this.state.showSearch){
        slider = <Slider
                  defaultValue={3}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={2}
                  marks
                  min={1}
                  max={50}
                  onChange={ (e, val) => this.setState({maxDistance:val}) } 
                />
        
        searchBar = <div id= "round-container">
                    <TextField id="filled-basic" label="Enter Your Postal Code" variant="filled" onChange={this.savePostal}  />
                    <button style={{ borderRadius: 50}} className="button" onClick={this.showTable}>
                        <SearchIcon />
                    </button>
                    <h3>Maximum Disance (KM)</h3>
                    {slider}
                    </div>;
      }
      return (
        <div>
          <div className="con">
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
          {searchBar}

          {clinicsTable}
          
        </div>
      );
    }
  }
  
  export default StoresNearYou;

  /* Next Steps:
    integrate book now to go to right clinics calendar
    help hamza and huzaifa with keeping track of user and admin
    */