import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Home extends Component {
    render() {
      return (
        <div className="livesight-main">
      <nav className="ls-header">
          <img className="ls-logo" src="/logo.png" /> <div className="nav-links"><a>About</a><a>WaitList</a></div>
      </nav>
    <div className="landing-header block">
        <div className="livesight-intro">
          <h2 className="tagline">SEE INTO <span className="outline">THE FUTURE</span></h2>
      </div>
      <button className="button">Learn More</button>
    </div>
    <div className="about-block block">
      <h2 className="gradient-header">A Augmented Reality Solution Solving A Real Problem</h2>
      <p>nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah nah</p>
    </div>
    <div className="uses-block block">
      <div className="uses-holder dots-bg" >
  
        <div className="uses-explanation">
          <h3>GOOOOOOOO</h3>
          <h3>GOOOOOOOO</h3>
          <h3>GOOOOOOOO</h3>
          <h3>GOOOOOOOO</h3>
          <h3>GOOOOOOOO</h3>
          <h3>GOOOOOOOO</h3>
        </div>
        <div className="uses-video">
          <video></video>
          <h3>Title here</h3>
        </div>
      </div>
    </div>
  <div className="parallax-very-small para-text" style={{backgroundImage:'url(https://static1.squarespace.com/static/564a03aee4b07c880fedd2a4/582f6e2e37c581f7575ab6a1/5aeb6bfe1ae6cff036d049a4/1525379472144/party+gif7.gif)',
        backgroundPosition: 'bottom center'}}>
    <h1 className="outline" style={{color: 'transparent'}}> Transition Title</h1>
  </div>
    <footer className="footer" style={{color: 'transparent'}}>
      <h1>LogiSight 2019 </h1>
    </footer>
    </div>
    
      );
    }
  }
  
  export default Home;
  
