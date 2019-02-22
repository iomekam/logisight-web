import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Home extends Component {
    render() {
      return (

        <div className="livesight-main">
    <nav className="ls-header">
        <img className="ls-logo" src="/logo.png" /> <div className="nav-links"><a>About</a> <a>Waitlist</a></div>
    </nav>
  <div className="landing-header block" style={{backgroundImage: 'url(/hb.jpg)'}}>
      <div className="livesight-intro">
        <h2 className="tagline">SEE INTO <span className="outline">THE FUTURE</span></h2>
    </div>
    <button className="button">Stay Updated</button>
  </div>
  <div className="about-block block">
    <h2 className="gradient-header">A Augmented Reality Solution Solving A Real Problem</h2>
    <p>Finding what you need is important, and becomes increasingly important when that item is needed at this moment.
You spend an average of 10 minutes per day looking for misplaced items.
The average person in the US spend 60 hours a year looking for misplaced or out of place items.
Items that are lost, total to an average of $2.7 billion a year to replace.</p>
  </div>
  <div className="uses-block block">
    <div className="uses-holder dots-bg" >

      <div className="uses-explanation">
        <h3>All In One Solution</h3>
        <h3>Instant Locationing</h3>
        <h3>Real Time 3D Tracking</h3>
        <h3>Augmented Reality View</h3>
        <h3>Unique Identifiers</h3>
      </div>
      <div className="uses-video">
        <img className="samp" src="sample.png" />
        <h3>A Mobile Solution</h3>
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