import React, { Component } from 'react';
import { FormGroup, Label, Button, Form, Col, Row } from 'react-bootstrap';


export default class LoginPage extends Component {


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

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleLogIn(event) {
        alert('Current State is: ' + JSON.stringify(this.state));
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
            .then(data => (console.log(data), this.setState({ loggedIn: data[0]})))
    }

    render() {
        return (

            <div>
                <Form onSubmit={this.handleLogIn}>
                    <Col xs={12} md={4}>
                        <FormGroup>
                            <Label htmlFor="username"> Username: </Label>
                            <input type="text" id="username" name="username" placeholder="Enter Username"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password"> End Date: </Label>
                            <input type="text" id="password" name="password" placeholder="Enter Password"
                                value={this.state.pasword}
                                onChange={this.handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Button type="submit" color="primary"> Login </Button>
                </Form>
            </div>

        );
    }
}


