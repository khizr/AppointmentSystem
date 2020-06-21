import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="header">Header</div>
        <div id="left-sidebar">Left Sidebar</div>
        <div id="content">
          <div id="inner-content">
            Main Conetent
          </div>
        </div>
        <div id="footer">Footer</div>
      </div>
    );
  }
}

//const myfirstelement = <h1>Hello React!</h1>

//ReactDOM.render(myfirstelement, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
