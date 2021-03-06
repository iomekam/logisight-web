import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Waitlist from "./waitlist"

class Home extends Component {
    render() {
      return (

        <div className="livesight-main">
    <nav className="ls-header">
        <img className="ls-logo" src="logo.png" /> <div className="nav-links"><a>About</a> <a>Waitlist</a></div>
    </nav>
  <div className="landing-header block" style={{backgroundImage: 'url(hb.jpg)'}}>
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
    <div className="uses-holder dots-bg" style={{backgroundImage: 'url(dots.png)'}}>

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
<div className="parallax-very-small para-text" style={{backgroundImage:'url(https://www.sgs.com/-/media/global/images/structural-website-images/hero-images/logistics-hero.jpg?la=en&hash=9AC1D40CE7812CEA0B53CC0D1F35603A94545AAF)',
      backgroundPosition: 'bottom center'}}>
  <h1 className="outline" style={{color: 'transparent'}} > Waitlist</h1>
  <div class='lms'> <input type='text' className='wl' placeholder='enter email here'/> <button className='wls'>Submit</button></div>
</div>
  <footer className="footer" style={{color: 'transparent'}}>
    <h1>LogiSight 2019 </h1>
  </footer>
  </div>

    
      );
    }
  }
  
  export default Home;