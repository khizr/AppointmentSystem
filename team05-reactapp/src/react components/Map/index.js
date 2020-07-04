import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import "./styles.css";

/* Component for the Map page */

class Clinic extends React.Component{
  constructor(props) {
    super(props);
  }
  changeState = () => {
    this.setState({distance:10})
  }
  render(){
    return(
      <tr>
        <td><b>{this.props.name}</b></td>
        <td>{this.props.address}</td>
        <td>{this.props.distance} Km</td>
        <td><button className="bookButton">Book Now</button></td>
      </tr>
    )
  }
}

let clinics = [<Clinic name="Mahfooz Clinic" address="123 Bay St" postal="2" distance="0" />, 
<Clinic name="Cloud Clinic" address="123 Recovery Street Bay St" postal="6" distance="0"/>,
<Clinic name="Fast Healing Walk-in" address="333 close to you St" postal="11" distance="0"/>]

function updateDistance(dis){
  clinics[0].setState({dsitance: dis})
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postal: "", myClinics: clinics}
  }
  static getDerivedStateFromProps(props, state) {
    return {postal: props.postal, myClinics: clinics};
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

function valuetext(value) {
  return `${value}`;
}

class Map extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: false, postal: '', showSearch: true};
      this.allowedPostalCodes = ["1","2","3","4","5","6","7","8","9","10"]
    }
    showTable = () => {

      if (this.allowedPostalCodes.includes(this.state.postal)){
        this.setState({showSearch: false});
      var sortedClinics = []
      for (let i =0; i < clinics.length; i++){
        sortedClinics[i] = Math.abs(parseInt(this.state.postal)-parseInt(clinics[i].props.postal))

      }
      let clinicsCopy = [];
      for (let i =0; i < clinics.length; i++){
        let lowest = Math.min.apply(Math, sortedClinics)
        let indexClinic = sortedClinics.indexOf(lowest)
        sortedClinics[indexClinic] = Infinity; 
        console.log(indexClinic)
        let clinic = clinics[indexClinic]
        clinicsCopy[i] = <Clinic name={clinic.props.name} address={clinic.props.address} postal={clinic.props.postal} distance={lowest} />
      }
      clinics = clinicsCopy;
      this.setState({show: true});
      }
      else if(this.state.postal == ""){
        alert("Please enter a postal code")
      }
      else{
        alert(this.state.postal + " is not a Valid Postal Code\n" + "Valid Postal codes are: "+this.allowedPostalCodes)
      }
    }
    savePostal = (event) => {
      this.setState({postal: event.target.value});
    }

    render() {
      let clinicsTable;
      let searchBar;
      let slider;
      if (this.state.show) {
        clinicsTable = <Table postal={this.state.postal}/>;
      };
      if (this.state.showSearch){
        slider = <Slider
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
        //console.log(slider.props.getAriaValueText);
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
        <div className="home__bg center">
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
  
  export default Map;

  /* Next Steps:
    distance from you 
    distance range
    */