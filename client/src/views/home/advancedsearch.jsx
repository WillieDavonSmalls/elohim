import React, { Component } from 'react';
import { FormGroup, Label, Button, Form, Col, Row, Grid } from 'react-bootstrap';


export default class AdvancedSearchForm extends Component {

    //For Form
    constructor(props) {
        super(props)
        this.state = {
            start_date: '',
            end_date: '',
            bordereaudata: {}
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target; 
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name;  

        this.setState({
            [name] : value
        })

    }

    handleSubmit(event){
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert("current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {

        return (
            <Grid>
            <Row>
                <Col xs={12} md={12}>
                <Form onSubmit={this.handleSubmit}>
                    <Col xs={12} md={12}>
                        <FormGroup>
                            <Label htmlFor="start_date"> Start Date: </Label>
                            <input type="text" id="start_date" name="start_date" placeholder="Start Date"
                                value={this.state.start_date} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="end_date"> End Date: </Label>
                            <input type="text" id="end_date" name="end_date" placeholder="End Date"
                                value={this.state.end_date} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        <Button type="submit" color="primary"> Search </Button>
                    </Col>

                </Form>
                </Col>
                </Row>
            </Grid>




        )
    }
}
