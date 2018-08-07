import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AccountList from './accounttbl';

export default class About extends Component {

    //For Form
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };
    }


    render() {

        return (
            <Grid>
                <Row className="main-row">
                    <Col xs={12} md={12}>
                    <AccountList />
                    </Col>
                </Row>
            </Grid>

        )
    }
}