import React from "react";
import {uid} from 'react-uid';
import "./styles.css";

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
  }

  render() {
    return (
      <div>
        <h1>Chat with us!</h1>
        <div id="chatbox"> 

          <input id="textbox" 
          type="text" 
          value = {this.state.message}
          onChange={this.handleInputChange}
          name = "message" 
          />
          <button onClick={this.sendMessage}>send</button>

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
      </div>

    );
  }
}
  
  export default Chat;