import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './views/home/home_navbar'
import Home from './views/home/home';
import About from './views/home/about';
import Contact from './views/home/contact';
import './App.css';

// TODO: MOve to login.jsx
class Login extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleLogIn}>
          <label>Username: </label>
          <input type="text" placeholder="Enter username" />
          <label>Password: </label>
          <input type="password" placeholder="Enter password" />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    }

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn() {
    // fetch("/api/validateLogin")
    // .then(response => response.json())
    // .then(data => (console.log(data), this.setState({loggedIn: data})))
  }

  render() {
    const isLoggedIn = this.state.loggedIn

    return (
      <Router>
        <div> 
          <Navbar/>
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
