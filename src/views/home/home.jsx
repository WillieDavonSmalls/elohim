import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Table, Navbar, NavItem, Nav } from 'react-bootstrap';

import './home.css'


export default class Home extends Component {

    //For Form
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    //for Form 
    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {

        return (
            <Grid>
                <Row className="main-row">
                    <Col xs={12} md={3}>

                        {/* Search Bar and Form  */}
                        <Form>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Bound(B) & Quoted(Q) Accounts</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>

                        {/* Table that houses the Accounts */}
                        <Table>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Account Name</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BOUND</td>
                                    <td>John Thomas, LLC.</td>
                                    <td>July 8, 2018</td>
                                </tr>
                                <tr>
                                    <td>BOUND</td>
                                    <td>Carol Danvers</td>
                                    <td>July 8, 2018</td>
                                </tr>
                                <tr>
                                    <td>QUOTE</td>
                                    <td>Scott Summers, Trust</td>
                                    <td>July 8, 2018</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col xs={12} md={9}>
                        {/* Heading */}
                        <Row>
                            <Col xs={12} md={12}>
                                <h2>Test Locations</h2>
                                <p>123 Hello Street</p>
                                <p>Nantucket MA 02554</p>
                            </Col>
                        </Row>

                        {/* Risk Information */}
                        <Row>
                            <Col xs={12} md={12}>
                                <h5>BOUND RISK:</h5>
                                <p><strong>Policy Number: </strong>TEST12312321</p>
                                <p><strong>Transaction: </strong>Renewal</p>
                                <p><strong>Policy Effective Date: </strong>March 12, 2018</p>
                                <p><strong>Transaction Effective Date: </strong>March 12, 2019</p>
                                <p><strong>Occupied By: </strong>Owner</p>
                            </Col>
                        </Row>

                        {/* Financial Information */}
                        <Row>
                            <Col xs={12} md={12}>
                                <h5>FINANCIAL INFORMATION:</h5>
                                    <Col xs={12} md={6}>
                                        <p><i><strong>Coverage Values:</strong></i></p>
                                        <p>Coverage A: 1,000,000</p>
                                        <p>Coverage B: 1,000,000</p>
                                        <p>Coverage C: 1,000,000</p>
                                        <p>Coverage D: 1,000,000</p>
                                        <p>Coverage E: 1,000,000</p>
                                        <p>Coverage F: 1,000,000</p>
                                        <p>Total Insured Value (TIV): 1,000,000</p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p><i><strong>Deductible and Flood Policy Information:</strong></i></p>
                                        <p>Wind: 2%</p>
                                        <p>Earthquake: 0%</p>
                                        <p>WS Site Ded as % of A: 2.63%</p>
                                        <p>AOP Deductible: 10,000</p>
                                        <p>Primary Flood Insurance Policy: Unknown</p>
                                    </Col>
                            </Col>
                        </Row>

                        {/* Financial Information */}
                            <Col xs={12} md={12}>
                                <Row>
                                <h5>EXPOSURE INFORMATION:</h5>
                                    <Col xs={12} md={6}>
                                        <p><i><strong>Primary Characteristics:</strong></i></p>
                                        <p>Construction: Frame</p>
                                        <p>Number of Stories: 2</p>
                                        <p>Year Built: 1900</p>
                                        <p>Floor Area: 6,000</p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p><i><strong>Secondary Characteristics:</strong></i></p>
                                        <p>Open Protection: Other/Unknown</p>
                                        <p>Roof Anchor: Other/Unknown</p>
                                        <p>Roof Geometry: Unknown</p>
                                        <p>Roof Sheathing: Other/Unknown</p>
                                        <p>Roof Age: 11 years or more</p>
                                        <p>Year Upgrade: Unknown</p>
                                    </Col>
                                </Row>
                            </Col>
                        <Row> 
                            
                        </Row>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
