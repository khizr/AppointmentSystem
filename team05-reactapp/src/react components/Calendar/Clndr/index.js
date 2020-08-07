import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button";

class Clndr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: "Click on a day on the Calendar",
            currentCalendarMonth: "June",
            currentMonthIndex: 0,
            months: ["June", "July", "August", "September", "October", "November", "December"],
            currentMonth: "June",
            currentDay: "1",
            currentYear: "2020",
            requestStatus: "",
            currentAppointments: "B4"
    };
}
    setDate = (a) => {
        const newDate = "Schedule for: " + this.state.currentMonth + " " + a + ", " + this.state.currentYear;
        this.setState({currentDay: a});
        this.setState({currentDate: newDate});
    }

    changeMonthUp = () => {
        if (this.state.currentMonthIndex <  (this.state.months.length - 1)){
            const num = this.state.currentMonthIndex + 1;
            this.setState({currentMonthIndex: num});
            const newMonth = this.state.months[num];
            this.setState({currentMonth: newMonth});
            this.setState({currentCalendarMonth: newMonth});
        }
    }

    changeMonthDown = () => {
        if (this.state.currentMonthIndex >  0){
            const num = this.state.currentMonthIndex - 1;
            this.setState({currentMonthIndex: num});
            const newMonth = this.state.months[num];
            this.setState({currentMonth: newMonth});
            this.setState({currentCalendarMonth: newMonth});
        }
    }

    getAppointments =  () => {
        const url = '/Calendar';

        // Since this is a GET request, simply call fetch on the URL
        fetch(url)
        .then((res) => { 
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
            return res.json() 
        } else {
                alert('Could not get appointments')
        }                
        })
        .then((json) => {  // the resolved promise with the JSON body
            // let bookings = document.querySelector('#bookingsList')
            // bookings.innerHTML = '';
            json.students.map((s) => {
                let li = document.createElement('li')
                console.log(li)
                li.innerHTML = "Name: <strong>${s.clinicName}</strong>, Year: <strong>${s.time}</strong>"
                // let newList = this.state.currentAppointments + [li]
                this.setState({currentAppointments: "Date: August 5, 2020 at 5:00PM"});
            })
        }).catch((error) => {
        })
    }

    request = () => {
        this.setState({requestStatus: "Appointment request successfully sent."});

        const url = '/Calendar';

        var dropdown = document.getElementById("timeDropDown");
        var timeInput = dropdown.options[dropdown.selectedIndex].text;

        // The data we are going to send in our request
        let data = {
            clinicName: "SampleName",
            month: this.state.currentMonth,
            day: this.state.currentDay,
            time: timeInput,
            year: this.state.currentYear,
            username: 1
        }
        // Create our request constructor with all the parameters we need
        const request = new Request(url, {
            method: 'post', 
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

        // Send the request with fetch()
        fetch(request)
        .then(function(res) {

            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                console.log('Added Booking')            
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
            }
            console.log(res)  // log the result in the console for development purposes,
                            //  users are not expected to see this.
        }).catch((error) => {
            console.log(error)
        })

    }

    render() {
      return (
        <div>
        <div className="table">
      <div className="calendarBanner"><strong><Button onClick={() => this.changeMonthDown()} endIcon={<ArrowBackIosIcon />}></Button>{this.state.currentCalendarMonth + " " + this.state.currentYear}<Button onClick={() => this.changeMonthUp()} endIcon={<ArrowForwardIosIcon />}></Button></strong></div>
            <table className="rowDays">
                {/*<tr className="rowWeek">
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>*/}
                <tr className="rowDays">
                    <th></th>
                    <th onClick={() => this.setDate("1")}>1</th>
                    <th onClick={() => this.setDate("2")}>2</th>
                    <th onClick={() => this.setDate("3")}>3</th>
                    <th onClick={() => this.setDate("4")}>4</th>
                    <th onClick={() => this.setDate("5")}>5</th>
                    <th onClick={() => this.setDate("6")}>6</th>
                </tr>
                <tr className="rowDays">
                    <th onClick={() => this.setDate("7")}>7</th>
                    <th onClick={() => this.setDate("8")}>8</th>
                    <th onClick={() => this.setDate("9")}>9</th>
                    <th onClick={() => this.setDate("10")}>10</th>
                    <th onClick={() => this.setDate("11")}>11</th>
                    <th onClick={() => this.setDate("12")}>12</th>
                    <th onClick={() => this.setDate("13")}>13</th>
                </tr>
                <tr className="rowDays">
                    <th onClick={() => this.setDate("14")}>14</th>
                    <th onClick={() => this.setDate("15")}>15</th>
                    <th onClick={() => this.setDate("16")}>16</th>
                    <th onClick={() => this.setDate("17")}>17</th>
                    <th onClick={() => this.setDate("18")}>18</th>
                    <th onClick={() => this.setDate("19")}>19</th>
                    <th onClick={() => this.setDate("20")}>20</th>
                </tr>
                <tr className="rowDays">
                    <th onClick={() => this.setDate("21")}>21</th>
                    <th onClick={() => this.setDate("22")}>22</th>
                    <th onClick={() => this.setDate("23")}>23</th>
                    <th onClick={() => this.setDate("24")}>24</th>
                    <th onClick={() => this.setDate("25")}>25</th>
                    <th onClick={() => this.setDate("26")}>26</th>
                    <th onClick={() => this.setDate("27")}>27</th>
                </tr>
                <tr className="rowDays">
                    <th onClick={() => this.setDate("28")}>28</th>
                    <th onClick={() => this.setDate("29")}>29</th>
                    <th onClick={() => this.setDate("30")}>30</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
        <div className="currentDay">
      <h2 className="h2me">{this.state.currentDate}</h2>
      
    <form>
        <label for="time">Choose a time to request an appointment: </label>
        <select id = "timeDropDown">
            <option value="9">9:00AM</option>
            <option value="9.5">9:30AM</option>
            <option value="10">10:00AM</option>
            <option value="10.5">10:30AM</option>
            <option value="11">11:00AM</option>
            <option value="11.5">11:30AM</option>
            <option value="12">12:00PM</option>
            <option value="12.5">12:30PM</option>
            <option value="1">1:00PM</option>
            <option value="1.5">1:30PM</option>
            <option value="2">2:00PM</option>
            <option value="2.5">2:30PM</option>
            <option value="3">3:00PM</option>
            <option value="3.5">3:30PM</option>
            <option value="4">4:00PM</option>
            <option value="4.5">4:30PM</option>
            <option value="5">5:00PM</option>
            <option value="5.5">5:30PM</option>
            <option value="6">6:00PM</option>
        </select><span> </span>
        <input input type="button" onClick={() => this.request()} value="Submit" ></input>
            <div className = "topMarg">{this.state.requestStatus}</div>
    </form>
        </div>
    
    <div>
    <input input type="button" onClick={() => this.getAppointments()} value="View Appointments" ></input>
    <ul id='bookingsList'>
        <li>{this.state.currentAppointments}</li>
    </ul>
    </div>

    </div>
      );
    }
  }
  
  export default Clndr;