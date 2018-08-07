import React, { Component } from 'react';
import AdvancedSearchForm from './advancedsearchmultInput';
import { Row,  Col } from 'react-bootstrap';




export default class AdvancedSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={12}>
                <AdvancedSearchForm />
                </Col>
            </Row>
                
        );
    }
}