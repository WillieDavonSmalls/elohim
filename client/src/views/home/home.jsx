import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tabs, Tab } from 'react-bootstrap';

import './home.css'
import AdvancedSearch from './advancedsearch';
import AccountDisplay from './accountdisplay';
import AccountList from './accounttbl';


export default class Home extends Component {

    //For Form
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        

        this.state = {
            value: '',
            accounts: []
        };
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers:{
                "content-type":"applicaiton/json"
            }
        }

        fetch('/api/allaccounts', options)
        .then(response => response.json())
        .then(data => this.setState({ accounts: data }))
        .catch(err => console.error(`Something went wrong ${err}`));
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

    handleSearchClick() {
        alert(this.state.value)
        const options = {
            method: "post",
            body: JSON.stringify({account : this.state.value}),
            headers:{
                "content-type":"application/json"
            }
            
        }
        fetch("/api/searchaccount", options)
        .then(results => results.json())
        .then(data => this.setState({ accounts: data }))
    }

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
                    <Col xs={12} md={4}>

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

                        <Button bsStyle="primary" type="button" onClick={this.handleSearchClick}>Search</Button>

                        {/* Table that houses the Accounts */}

                        <AccountList accounts={this.state.accounts} />
                    </Col>

                    <Col xs={12} md={8}>
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
