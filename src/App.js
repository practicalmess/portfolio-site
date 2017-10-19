import React, { Component } from 'react';
import logo from './images/ace-scarf.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sidney J. Hackney</h2>
          <h3>Full Stack Web Developer</h3>
        </div>
        <div className="App-body">
          <div className="App-body-work">
            <ul>
              <li></li>
              <li>Boston Whovians</li>
            </ul>
          </div>
          <ul>
            <li>Full stack</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
