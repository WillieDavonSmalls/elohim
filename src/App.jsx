import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navbar from './views/home/home_navbar'



class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Navbar/>
        </div>
      </Router>
    );
  }
}

export default App;
