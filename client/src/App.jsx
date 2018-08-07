import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './views/home/home_navbar'
import home from './views/home/home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Navbar/>
          <Route exact path="/" component ={home} />
        </div>
      </Router>
    );
  }
}

export default App;
