import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './views/home/home_navbar'
import home from './views/home/home';
import about from './views/home/about';
import contact from './views/home/contact';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Username: </label>
          <input type="text" placeholder="Enter username" />
          <label>Password: </label>
          <input type="password" placeholder="Enter password" />
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  render() {
    const isLoggedIn = this.state.loggedIn

    return (
      <Router>
        <div> 
          <Navbar/>
          <Route exact path="/login" component ={Login} />
          <Route exact path="/" component ={home} />
          <Route exact path="/about" component ={about} />
          <Route exact path="/contact" component ={contact} />
        </div>
      </Router>
    );
  }
}

export default App;
