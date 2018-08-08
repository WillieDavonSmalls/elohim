import React, { Component } from 'react';
import { Row, Grid, Col} from 'react-bootstrap';
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
                    <Col xs={12} md={3}>
                    Hello
                    <AccountList />
                    </Col>
                </Row>
            </Grid>

        )
    }
}