import React from "react";

class Clndr extends React.Component {
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
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                </tr>
                <tr className="rowDays">
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                </tr>
                <tr className="rowDays">
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                </tr>
                <tr className="rowDays">
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                </tr>
                <tr className="rowDays">
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
        <div className="currentDay">
            <h2>Schedule for </h2>
        </div>
        </div>
      );
    }
  }
  
  export default Clndr;