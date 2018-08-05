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
                                    <td>B</td>
                                    <td>John Thomas, LLC.</td>
                                    <td>July 8, 2018</td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td>Carol Danvers</td>
                                    <td>July 8, 2018</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>Scott Summers, Trust</td>
                                    <td>July 8, 2018</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                    <Col xs={12} md={9}>
                        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                            <NavItem eventKey="1" componentClass={Link} href="/" to="/">
                                Account Details
                            </NavItem>
                            <NavItem eventKey="2" componentClass={Link} href="/" to="/">
                                Advanced Search
                            </NavItem>
                            <NavItem eventKey="3" componentClass={Link} href="/" to="/">
                                Reports
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
