import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './views/home/home_navbar'
import Home from './views/home/home';
import About from './views/home/about';
import Contact from './views/home/contact';
import Login from './views/home/login'
import './App.css';


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
          {/* <Route exact path="/login" render ={() => <Login/>} /> */}
          <Route exact path="/login" render ={() => <Login handleLogIn={this.handleLogIn} />} />
          {/* <Route exact path="/signin" render ={() => <Login handleLogIn={this.handleLogIn} />} /> */}
          <Route exact path="/" render ={() => isLoggedIn ? <Home/> : <Redirect to="/login" />} />
          <Route exact path="/about" render ={() => isLoggedIn ? <About/> : <Redirect to="/login" />} />
          <Route exact path="/contact" render ={() => isLoggedIn ? <Contact/> : <Redirect to="/login" />} />
        </div>
      </Router>
    );
  }
}

export default App;
