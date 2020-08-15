import React from "react";
import Clndr from "./Clndr";
import "./styles.css";
import Logo from "./sampleLogo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';


/* Component for the Calendar page */
class Calendar extends React.Component {
    render() {
      return (
        <div>
          <div className="bannerUzi">
            {/* <img className = "myImage" src={Logo} alt="Clinic Logo"></img> */}
            <span className = "buttonHome">
              <Link className="component__button-link" to={"./"}>
                <Button variant="contained"
                color="secondary" 
                style={{ borderRadius: 50}}
                className="homeButton"
                endIcon={<HomeIcon />}>
                Home</Button>
              </Link>
            </span>
          <div className="clinicName">Company Name</div>
          {/* <div className="clinicNumber">Company Number</div> */}
          </div>
          <Clndr></Clndr>
        </div>
      );
    }
  }  
  export default Calendar;




  // copy of index.js before adding calendar stuff

  // import React from "react";
  // import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
  // import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
  // import Button from "@material-ui/core/Button";
  
  // class Clndr extends React.Component {
  //     constructor(props) {
  //         super(props);
  //         this.state = {
  //             currentDate: "Click on a day on the Calendar",
  //             currentCalendarMonth: "August",
  //             currentMonthIndex: 5,
  //             //months: ["June", "July", "August", "September", "October", "November", "December"],
  //             months: ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"],
  //             maxDays: [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28],
  //             weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //             currentMonth: "June",
  //             currentDay: "1",
  //             currentYear: "2020",
  //             requestStatus: ""
  //     };
  // }
  //     //make a function called add rows that clears chart and re-adds each cell every time month is changed
  //     //use code from indiproj
  //     setDate = (a) => {
  //         const newDate = "Schedule for: " + this.state.currentMonth + " " + a + ", " + this.state.currentYear;
  //         this.setState({currentDay: a});
  //         this.setState({currentDate: newDate});
  //     }
  
  //     changeMonthUp = () => {
  //         if (this.state.currentMonthIndex <  (this.state.months.length - 1)){
  //             const num = this.state.currentMonthIndex + 1;
  //             this.setState({currentMonthIndex: num});
  //             const newMonth = this.state.months[num];
  //             this.setState({currentMonth: newMonth});
  //             this.setState({currentCalendarMonth: newMonth});
  //         }
  //     }
  
  //     changeMonthDown = () => {
  //         if (this.state.currentMonthIndex >  0){
  //             const num = this.state.currentMonthIndex - 1;
  //             this.setState({currentMonthIndex: num});
  //             const newMonth = this.state.months[num];
  //             this.setState({currentMonth: newMonth});
  //             this.setState({currentCalendarMonth: newMonth});
  //         }
  //     }
  
  //     getAppointments = () => {
  //         // the URL for the request
  //         const url = '/Calendar';
      
  //         // Since this is a GET request, simply call fetch on the URL
  //         fetch(url)
  //         .then((res) => { 
  //             if (res.status === 200) {
  //                 // return a promise that resolves with the JSON body
  //                return res.json() 
  //            } else {
  //                 alert('Could not get bookings')
  //            }                
  //         })
  //         .then((json) => {  // the resolved promise with the JSON body
  //             let bookingsList = document.querySelector('#bookingsList')
  //             bookingsList.innerHTML = '';
  //             console.log(json)
  //             json.bookings.map((s) => {
  //                 let li = document.createElement('li')
  //                 li.innerHTML = "Appointment on: <strong>"+s.month+" "+s.day+" "+s.year+" at "+s.time
  //                 bookingsList.appendChild(li)
  //                 console.log(s)
  //             })
  //         }).catch((error) => {
  //             console.log(error)
  //         })
  //     }
  
  //     requestAppt = () => {
  //         if (this.state.currentDate === "Click on a day on the Calendar"){
  //             alert("Select a day on the calendar to book an appointment")
  //         }
  //         else{
  //             const url = '/Calendar';
  
  //             var dropdown = document.getElementById("timeDropDown");
  //             var timeInput = dropdown.options[dropdown.selectedIndex].text;
  
  //             // The data we are going to send in our request
  //             let data = {
  //                 clinicName: "SampleName",
  //                 month: this.state.currentMonth,
  //                 day: this.state.currentDay,
  //                 time: timeInput,
  //                 year: this.state.currentYear,
  //             }
  //             // Create our request constructor with all the parameters we need
  //             const request = new Request(url, {
  //                 method: 'post', 
  //                 body: JSON.stringify(data),
  //                 headers: {
  //                     'Accept': 'application/json, text/plain, */*',
  //                     'Content-Type': 'application/json'
  //                 },
  //             });
  
  //             // Send the request with fetch()
  //             const that = this;
  //             fetch(request)
  //             .then(function(res) {
  //                 // Handle response we get from the API.
  //                 // Usually check the error codes to see what happened.
  //                 if (res.status === 200) {
  //                     // If booking was added successfully, tell the user.
  //                     that.setState({requestStatus: "Added Booking"});
  //                     // let bookingsList = document.querySelector(".topMarg")
  //                     // bookingsList.setAttribute("color", "green")
  //                 } else {
  //                     // If server couldn't add the booking, tell the user.
  //                     that.setState({requestStatus: "Time Slot Taken"});
  //                 }
  //                 console.log(res)
  //             }).catch((error) => {
  //                 console.log(error)
  //             })
  //         }
  //     }
  
  //     render() {
  //       return (
  //         <div>
  //         <div className="table">
  //       <div className="calendarBanner"><strong><Button onClick={() => this.changeMonthDown()} endIcon={<ArrowBackIosIcon />}></Button>{this.state.currentCalendarMonth + " " + this.state.currentYear}<Button onClick={() => this.changeMonthUp()} endIcon={<ArrowForwardIosIcon />}></Button></strong></div>
  //             <table className="rowDays">
  //                 <tr className="rowWeek">
  //                     <th>Sun</th>
  //                     <th>Mon</th>
  //                     <th>Tue</th>
  //                     <th>Wed</th>
  //                     <th>Thu</th>
  //                     <th>Fri</th>
  //                     <th>Sat</th>
  //                 </tr>
  //                 <tr className="rowDays">
  //                     <th></th>
  //                     <th onClick={() => this.setDate("1")}>1</th>
  //                     <th onClick={() => this.setDate("2")}>2</th>
  //                     <th onClick={() => this.setDate("3")}>3</th>
  //                     <th onClick={() => this.setDate("4")}>4</th>
  //                     <th onClick={() => this.setDate("5")}>5</th>
  //                     <th onClick={() => this.setDate("6")}>6</th>
  //                 </tr>
  //                 <tr className="rowDays">
  //                     <th onClick={() => this.setDate("7")}>7</th>
  //                     <th onClick={() => this.setDate("8")}>8</th>
  //                     <th onClick={() => this.setDate("9")}>9</th>
  //                     <th onClick={() => this.setDate("10")}>10</th>
  //                     <th onClick={() => this.setDate("11")}>11</th>
  //                     <th onClick={() => this.setDate("12")}>12</th>
  //                     <th onClick={() => this.setDate("13")}>13</th>
  //                 </tr>
  //                 <tr className="rowDays">
  //                     <th onClick={() => this.setDate("14")}>14</th>
  //                     <th onClick={() => this.setDate("15")}>15</th>
  //                     <th onClick={() => this.setDate("16")}>16</th>
  //                     <th onClick={() => this.setDate("17")}>17</th>
  //                     <th onClick={() => this.setDate("18")}>18</th>
  //                     <th onClick={() => this.setDate("19")}>19</th>
  //                     <th onClick={() => this.setDate("20")}>20</th>
  //                 </tr>
  //                 <tr className="rowDays">
  //                     <th onClick={() => this.setDate("21")}>21</th>
  //                     <th onClick={() => this.setDate("22")}>22</th>
  //                     <th onClick={() => this.setDate("23")}>23</th>
  //                     <th onClick={() => this.setDate("24")}>24</th>
  //                     <th onClick={() => this.setDate("25")}>25</th>
  //                     <th onClick={() => this.setDate("26")}>26</th>
  //                     <th onClick={() => this.setDate("27")}>27</th>
  //                 </tr>
  //                 <tr className="rowDays">
  //                     <th onClick={() => this.setDate("28")}>28</th>
  //                     <th onClick={() => this.setDate("29")}>29</th>
  //                     <th onClick={() => this.setDate("30")}>30</th>
  //                     <th></th>
  //                     <th></th>
  //                     <th></th>
  //                     <th></th>
  //                 </tr>
  //             </table>
  //         </div>
  //         <div className="currentDay">
  //       <h2 className="h2me">{this.state.currentDate}</h2>
        
  //     <form>
  //         <label for="time">Choose a time to request an appointment: </label>
  //         <select id = "timeDropDown">
  //             <option value="9">9:00AM</option>
  //             <option value="9.5">9:30AM</option>
  //             <option value="10">10:00AM</option>
  //             <option value="10.5">10:30AM</option>
  //             <option value="11">11:00AM</option>
  //             <option value="11.5">11:30AM</option>
  //             <option value="12">12:00PM</option>
  //             <option value="12.5">12:30PM</option>
  //             <option value="1">1:00PM</option>
  //             <option value="1.5">1:30PM</option>
  //             <option value="2">2:00PM</option>
  //             <option value="2.5">2:30PM</option>
  //             <option value="3">3:00PM</option>
  //             <option value="3.5">3:30PM</option>
  //             <option value="4">4:00PM</option>
  //             <option value="4.5">4:30PM</option>
  //             <option value="5">5:00PM</option>
  //             <option value="5.5">5:30PM</option>
  //             <option value="6">6:00PM</option>
  //         </select><span> </span>
  //         <input input type="button" onClick={() => this.requestAppt()} value="Submit" ></input>
  //         <div className = "topMarg">{this.state.requestStatus}</div>
  //         </form>
  //         <input id = "viewApptButton" input type="button" onClick={() => this.getAppointments()} value="View Appointments" ></input>
  //         <ul id='bookingsList'></ul>
  //         </div>
  
  //     </div>
  //       );
  //     }
  //   }
    
  //   export default Clndr;