import React from "react";

class Clndr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: "Click on a day on the Calendar",
            currentMonth: "June",
            currentDay: "1",
            currentYear: "2020"
    };
}
    setDate = (a) => {
        const newDate = "Schedule for: " + this.state.currentMonth + " " + a + ", " + this.state.currentYear;
        this.setState({currentDate: newDate});
    }
    render() {
      return (
        <div>
        <div className="table">
            <div className="calendarBanner"><strong>June 2020</strong></div>
            <table className="rowDays">
                <tr className="rowWeek">
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
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
        <label for="time">Choose a Time to request an Appointment: </label>
        <select>
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
        <input type="submit" value="Submit"></input>
    </form>
        </div>
    </div>
      );
    }
  }
  
  export default Clndr;