import React, { Component } from 'react';
import { FormGroup, Label, Button, Form, Col, Row } from 'react-bootstrap';


export default class AdvancedSearchForm extends Component {

    //For Form
    constructor(props) {
        super(props)
        this.state = {
            start_date: '',
            end_date: '',
            account_status: '',
            program_admin: '',
            policynumber: '',
            postalcode: '',
            statecode: '',
            county: ''
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
            <div>

                <Form onSubmit={this.handleSubmit}>
                    <Col xs={12} md={4}>
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
                        <FormGroup>
                            <Label htmlFor="policynumber"> Policy Number: </Label>
                            <input type="text" id="policynumber" name="policynumber" placeholder="Policy Number"
                                value={this.state.policynumber} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                    </Col>


                    <Col xs={12} md={4}>
                        <FormGroup>
                            <Label htmlFor="postalcode"> Postal Code: </Label>
                            <input type="text" id="postalcode" name="postalcode" placeholder="Postal Code"
                                value={this.state.postalcode} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="statecode"> State Code: </Label>
                            <input type="text" id="statecode" name="statecode" placeholder="statecode"
                                value={this.state.statecode} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="county"> County: </Label>
                            <input type="text" id="county" name="county" placeholder="County"
                                value={this.state.county} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={4}>
                        <FormGroup>
                            <Label htmlFor="program_admin"> Program Administrator: </Label>
                            <input type="text" id="program_admin" name="program_admin" placeholder="Program Administrator"
                                value={this.state.program_admin} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        
                            {/* <input type="select" name="state" 
                                value={this.state.state}>
                                <option>CT<option>
                                <option>FL<option>
                                <option>GA<option>
                                <option>MA<option>
                                <option>NC<option>
                                <option>NJ<option>
                                <option>NY<option>
                                <option>RI<option>
                                <option>SC<option>
                            </input> */}
                       
                        <FormGroup>
                            <Label htmlFor="account_status"> Account Status: </Label>
                            <input type="text" id="account_status" name="account_status" placeholder="Account Status"
                                value={this.state.account_status} 
                                onChange={this.handleInputChange}/>
                        </FormGroup>
                        <Button type="submit" color="primary"> Search </Button>
                    </Col>

                </Form>

            </div>



        )
    }
}
