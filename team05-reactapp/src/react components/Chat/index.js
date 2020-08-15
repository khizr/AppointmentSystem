import React from "react";
import {uid} from 'react-uid';
import "./styles.css";
import HomeIcon from '@material-ui/icons/Home';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

/* Component for the Chat page */
class Chat extends React.Component {

  getMessages = () => {

    const url = '/message';

    //GET REQUEST STARTS HERE
    fetch(url)
    .then((res) => { 
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
           return res.json() 
       } else {
            alert('Could not get messages')
       }                
    })
    .then((json) => {  // the resolved promise with the JSON body
        console.log(json)
        
        const messageList = []

        json.message.map((s) => {
          if (s.from_user === this.state.from_user){
            const message = [ "You", s.to_user, s.text]
            messageList.push(message)
          }
          else if (s.to_user === this.state.from_user){
            const message = [s.from_user, s.to_user, s.text]
            messageList.push(message)
          }
        })

        this.setState({
          message_list: messageList
        })
        console.log(this.state.message_list)

    }).catch((error) => {
        console.log(error)
    })

  }


  state = {
    to_user: "",
    message: "",
    message_list: [],
    from_user: "anon",
    msg_status: this.getMessages()
  }

  handleInputChange = (event) => {
    
    const target = event.target
    const value = target.value
    const name = target.name
    
    this.setState({
      message: value 
    })
  
  }

  handleInputChange2 = (event) => {
    
    const target2 = event.target
    const value2 = target2.value
    const name2 = target2.name
    
    this.setState({
      to_user: value2 
    })
  
  }



  sendMessage = () => {

    // the URL for the request
    const url = '/message';

    // The data we are going to send in our request
    let data = {
        to_user: this.state.to_user,
        text: this.state.message,
        from_user: this.state.from_user
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
            console.log('Added message')
           
        } else {
     
        }
        console.log(res)  // log the result in the console for development purposes,
                          //  users are not expected to see this.
    }).catch((error) => {
        console.log(error)
    })

    this.getMessages()
  }

  sendSuggestion = (suggestion) => {
    this.state.message = suggestion
    this.sendMessage()
  }

  render() {
    return (
      <div className="home__bg centern">
        <div id="topbar">
          <Link to={"./"}>
            <Button variant="contained"
            color="secondary" 
            style={{ borderRadius: 50}}
            className="homeButton"
            endIcon={<HomeIcon />}>
            Home</Button>
          </Link>
        </div>
        <h1>Chat with us!</h1>


        <div id="chatbox"> 
          <h3 className="titles">What can we help you with?</h3>
          <div id="suggestions">
            <span>Popular Requests: </span>
            <button onClick={() => this.sendSuggestion("May I speak to my family doctor please?")}>request doctor</button>
            <button onClick={() => this.sendSuggestion("What time is my appointment set for again?")}>appointment reminder</button>
            <button onClick={() => this.sendSuggestion("Where is the closest clinic to my location?")}>request location</button>
            <button onClick={() => this.sendSuggestion("Could you please send my receipt to my email?")}>request email receipt</button>

          </div>

          <input id="to_textbox" 
          placeholder="Username of recipient"
          type="text" 
          value = {this.state.to_user}
          onChange={this.handleInputChange2}
          name = "to_user" 
          />

          <input id="textbox" 
          placeholder="Type your question or click one of the options above"
          type="text" 
          value = {this.state.message}
          onChange={this.handleInputChange}
          name = "message" 
          />
          <button id="sendButton" onClick={this.sendMessage}>send</button>

          <ul id='messageList'>
            {this.state.message_list.map((msg) => {
              return(
                <li className="message" key={uid(msg)}>
                  <strong>{msg[0]} said: </strong>{msg[2]}
                </li>
              )
            })}
          </ul>
        </div>


        

        <div id="infoBox">
          <h3 className="titles">Contact Information</h3>

          <img src="https://img.icons8.com/ios-glyphs/30/000000/secured-letter.png"/>
          <h4>EMAIL</h4>
          <span>cloud@clinics.com</span>

          <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"/>
          <h4>PHONE</h4>
          <span>012-345-6789</span>


          <img src="https://img.icons8.com/ios-glyphs/30/000000/address.png"/>
          <h4>ADDRESS</h4>
          <span>333 Oxford Blvd, Toronto, ON, L5M2G7</span>

          <img src="https://img.icons8.com/ios-glyphs/30/000000/clock.png"/>
          <h4>HOURS</h4>
          <span>9AM - 4:30PM , Monday to Friday</span>
          <span>9AM - 1:30PM , Saturday to Sunday</span>

        </div>
      </div>

    );
  }
}
  
  export default Chat;
