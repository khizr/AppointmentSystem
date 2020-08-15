import React from "react";
import {uid} from 'react-uid';
import "./styles.css";
import HomeIcon from '@material-ui/icons/Home';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

/* Component for the Chat page */
class Chat extends React.Component {

  state = {
    message: "",
    sentMessages: []
  }

  handleInputChange = (event) => {
    
    const target = event.target
    const value = target.value
    const name = target.name
    
    this.setState({
      message: value 
    })
  
  }

  sendMessage = () => {

    const messageList = this.state.sentMessages
    const message = {text: this.state.message}
    messageList.push(message)

    this.setState({
      sentMessages: messageList
    })

    console.log("got heeere111")
    console.log("got heeere2")

    const url = '/message';

    let data = {
      name: message
    }
    console.log('created req')
    const request = new Request(url, {
      method: 'post', 
      body: JSON.stringify(data),
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
    });

    fetch(request)
    .then(function(res) {
        console.log('msg')
        // Handle response we get from the API.
        // Usually check the error codes to see what happened.
        if (res.status === 200) {
            // If student was added successfully, tell the user.
            console.log('added message')
           
        } else {
            // If server couldn't add the student, tell the user.
            // Here we are adding a generic message, but you could be more specific in your app.
            console.log('could not add message')
     
        }
        console.log(res)  // log the result in the console for development purposes,
                          //  users are not expected to see this.
    }).catch((error) => {
        console.log(error)
    })



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

          <input id="textbox" 
          placeholder="Type your question or click one of the options above"
          type="text" 
          value = {this.state.message}
          onChange={this.handleInputChange}
          name = "message" 
          />
          <button id="sendButton" onClick={this.sendMessage}>send</button>

          <ul id='messageList'>
            {this.state.sentMessages.map((msg) => {
              return(
                <li className="message" key={uid(msg)}>
                  {msg.text}
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
