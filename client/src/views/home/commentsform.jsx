import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Label, Col, Button, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
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
            <Row>
                <Col xs={12} md={6}>
                            <Col xs={12} md={12}>
                                <ListGroup>
                                    <ListGroupItem>This account has significant loss exprience</ListGroupItem>
                                    <ListGroupItem>Rita and Ike Claims</ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Col>

                <Col xs={12} md={6}>
                        <Form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Enter Comments</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Please Enter comments here"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>

                        <Button bsStyle="success" type="button" onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                    </Row>

        )
    }
}


// <FormGroup>
// <Label htmlFor="start_date"> Start Date: </Label>
// <input type="textarea" id="user_comment" name="user_comment" placeholder="Comments"
//     value={this.state.user_comment} 
//     onChange={this.handleInputChange}/>
// </FormGroup>