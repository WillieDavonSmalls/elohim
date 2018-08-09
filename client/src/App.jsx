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
      loggedIn: true,
      password: '',
      username: ''
    }

    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogIn(event) {
    // alert('Current State is: ' + JSON.stringify(this.state));
    console.log('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
    const options = {
        method: "post",
        body: JSON.stringify({ usercredentials: this.state }),
        headers: {
            "content-type": "application/json"
        }

    }

    fetch("/api/validatelogin", options)
        .then(response => response.json())
        .then(data => {
            if (data.validation == true || data.validation > 0) {
              this.setState({loggedIn: true})
            } else {
              this.setState({loggedIn: false})
            }
            console.log(data.validation);
          })
}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })

    console.log(value, name);
}
 
  render() {
    const isLoggedIn = this.state.loggedIn

    return (
      <Router>
        <div> 
          <Navbar/>
          <Route exact path="/login" render ={() => <Login handleLogIn={this.handleLogIn} handleInputChange={this.handleInputChange}/>} />
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
