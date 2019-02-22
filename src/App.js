import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './home'
import { BrowserRouter, Route } from 'react-router-dom'
import WaitList from './wl/waitlist';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/waitList" component={WaitList}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
