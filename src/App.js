import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
import jslogo from './images/Javascript-shield.png';
import reactlogo from './images/React-icon.svg';
import phplogo from './images/PHP-logo.svg';
import laravellogo from './images/laravel.jpg';
import sasslogo from './images/sass.svg';
// import Grid from './Grid';
import './App.css';
import './fontawesome/css/font-awesome.min.css';

class App extends Component {
  state = {
    shown: 'splash',
    skin: 'default'
  };

  render() {
    return (
      <div className="App">
        <div className="App-nav">
          <ul className="App-nav--wrapper">
            <li className="App-nav--item" onClick={() => this.setState({shown: 'splash'})}>Home</li>
            <li className="App-nav--item" onClick={() => this.setState({shown: 'about'})}>About</li>
            {/*<li className="App-nav--item" onClick={() => this.setState({shown: 'portfolio'})}>Portfolio</li>*/}
            <li className="App-nav--item" onClick={() => this.setState({shown: 'resume'})}>Resume</li>
            <li className="App-nav--item" onClick={() => this.setState({shown: 'contact'})}>Contact</li>
          </ul>
        </div>
        {this.state.shown === 'splash' &&
          <div className="App-splash">
            <div className="App-logo--wrapper">
              <img src={logo} className="App-logo--image" alt="logo" />
            </div>
            <div className="App-intro--wrapper">
              <h1 className="App-intro--text">Sidney J Hackney</h1>
              <h3 className="App-intro--text">a full-stack web developer</h3>
              <p className="App-intro--blurb">
                I am a Boston-based full stack web developer with a passion for self teaching and taking ownership of projects. My background of personal projects and piecemeal education has given me a foundation of flexibility and a drive to find the most relevant and interesting topics and languages to research and utilize.
              </p>
            </div>
          </div>
        }
        
        <div className="App-body">
          {this.state.shown === 'resume' &&
            <div className="App-body--columns">
              <div className="column-1">
                <h3>Work Experience</h3>
                  <h4>Wayfair, LLC Oct. 2016 - Oct. 2017 | Software Engineer</h4>
                    <ul>
                      <li>Full stack development of internal browser-based tools</li>
                      <li>Using React.js and proprietary MVC framework to build out stand-alone apps</li>
                      <li>Translating designers’ wireframe mockups into functional code</li>
                      <li>Collaborating with other team members on planning and code design</li>
                    </ul>
                  <h4>The Boston Whovians June 2013 - present | Administrator and Webmaster</h4>
                    <ul>
                      <li>Assisting with planning and running social events</li>
                      <li>Setting up and maintaining group website using WordPress 4.5.2</li>
                      <li>Managing online sales of merchandise and event tickets</li>
                    </ul>
              </div>
              <div className="column-2">
                <h3>Languages and Frameworks</h3>
                <ul className="languages">
                  <li><img src={jslogo} alt="Javascript logo"/></li>
                  <li><img src={reactlogo}/></li>
                  <li><img src={phplogo}/></li>
                  <li><img src={laravellogo}/></li>
                  <li><img src={sasslogo}/></li>
                </ul>
              </div>
            </div>
          }
          {this.state.shown === 'about' &&
            <div className="App-body--section">
              <h3>About Me</h3>
              <p>
                A Boston, MA native, I spent one year at the University of Texas at Austin before returning to Boston to take a series of evening courses in topics ranging from the history of photography to calculus before focusing exclusively on computer science courses. The moment that made me realize I wanted to be a software engineer was when, after deciding on a whim that I wanted to play a computer game from my childhood (The Legend of Kyrandia), I spent a joyous five hours researching and configuring DOS emulators. Even though all I got out of it was a short adventure game that was perhaps not as challenging as I remembered, the experience of trial and discovery from diving into programs and concepts I had never interacted with before stuck with me.
              </p>
              <p>
                As a person, I am patient, diligent, and kind. I grew up in a Quaker household, and though I am not a Quaker now I still believe that the best way to grow and advance is as a community. I am a dedicated geek interested in cosplay and sci-fi, which is why running the Boston Whovians, a Boston-based meetup group for fans of the BBC phenomenon Doctor Who, is such a fun and meaningful part of my life. I also identify as transgender and my pronouns are "they/them/their".
              </p>
            </div>
          }
          {this.state.shown === 'contact' && 
            <div className="links">
              <a href="https://github.com/practicalmess">
                <i className="fa fa-github" aria-hidden="true"></i>
                <br/>GitHub profile
              </a>
              <a href="https://www.linkedin.com/in/sidney-j-hackney-9711b1ab/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <br/>LinkedIn Profile
              </a>
            </div>
          }
          <h2>"I'm gonna wake up and keep trying to do good and so are you and nobody gets to vote on that." - Justin McElroy</h2>
        </div>
      </div>
    );
  }
}

export default App;
