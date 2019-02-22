import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './home'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

export default App;
