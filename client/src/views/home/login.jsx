import React, { Component } from 'react';
import { FormGroup, Label, Button, Form, Col, Row } from 'react-bootstrap';


export default class AdvancedSearchForm extends Component {


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

    //   handleInputChange(event){
    //     const target = event.target; 
    //     const value = target.type === 'checkbox' ? target.checked : target.value; 
    //     const name = target.name;  

    //     this.setState({
    //         [name] : value
    //     })

    // }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

      handleLogIn() {
        alert('username:' + this.state.username + 'password: ' + this.state.password);
        console.log(this.state.username, this.state.password);
      //   const options = {
      //     method: "post",
      //     body: JSON.stringify({account : this.state.value}),
      //     headers:{
      //         "content-type":"application/json"
      //     }
          
      // }
    
        // fetch("/api/validateLogin")
        // .then(response => response.json())
        // .then(data => (console.log(data), this.setState({loggedIn: data})))
      }

      render() {
        return (
          <div>
            <form onSubmit={this.props.handleLogIn}>
              <label>Username: </label>
              <input type="text" placeholder="Enter Username" id="username" name= "username" value={this.state.username} onChange={this.handleInputChange}/>
              <label>Password: </label>
              <input type="password" placeholder="Enter Password" id="password" name= "password" value={this.state.password} onChange={this.handleInputChange}/>
              <button type="submit">login</button>
            </form>
          </div>
        );
      }
}