import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Label, Col, Button } from 'react-bootstrap';
import SubmitButton from './btnsubmitcomment';

export default class CommentsForm extends Component {


    //For Form
    constructor(props) {
        super(props)
        this.state = {
            user_comment: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert("current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="user_comment" md={}>New Comments</Label>
                        <Col md={10}>
                            <input type="text" id="user_comment" name="user_comment" placeholder="Enter comments"
                                rows="12"
                                value={this.state.user_comment}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <Button type="submit" color="primary"> Search </Button>
                </Form>
                
            </div>
        )
    }
}