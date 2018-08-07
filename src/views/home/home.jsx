import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Table, Button, Tabs, Tab } from 'react-bootstrap';

import './home.css'
import AdvancedSearch from './advancedsearch';
import AccountDisplay from './accountdisplay';


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

    //Button
    // constructor(props, context) {
    //   super(props, context);

    //   this.handleClick = this.handleClick.bind(this);

    //   this.state = {
    //     isLoading: false
    //   };
    // }

    handleClick() {
        this.setState({ isLoading: true });

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({ isLoading: false });
        }, 2000);
    }
    //////////////

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
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Account Information">
                            <AccountDisplay />
                            </Tab>
                            <Tab eventKey={2} title="Advanced Search">
                                <AdvancedSearch />






                            </Tab>
                            <Tab eventKey={3} title="Reports">
                                Reports Aggregation 
                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Grid>

        )
    }
}
