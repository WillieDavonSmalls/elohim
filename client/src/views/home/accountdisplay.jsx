import React, { Component } from 'react';
import {  Row, Col } from 'react-bootstrap';

import './accountdisplay.css';
import './btnsubmitcomment';
import CommentsForm from './commentsform';

export default class AccountDisplay extends Component {

    //For Form
    constructor(props, context) {
        super(props, context);


        this.state = {
            value: ''
        };
    }


    render() {

        return (
            <div>
                {/* Heading */}
                <Row>
                    <Col xs={12} md={12}>
                        <h3>Test Locations</h3>
                        <p><strong>123 Hello Street</strong></p>
                        <p><strong>Nantucket MA 02554</strong></p>
                    </Col>
                </Row>

                {/* Risk Information */}
                <Row>
                    <Col xs={12} md={12}>
                        <h5>BOUND RISK:</h5>
                        <Col xs={12} md={6}>
                            <p><strong>Policy Number: </strong>TEST12312321</p>
                            <p><strong>Transaction: </strong>Renewal</p>
                            <p><strong>Policy Effective Date: </strong>March 12, 2018</p>
                            <p><strong>Transaction Effective Date: </strong>March 12, 2019</p>
                            <p><strong>Occupied By: </strong>Owner</p>
                        </Col>
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

                {/* Exposure Information */}
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

                {/* comment section */}
                {/* Exposure Information */}
                <Col xs={12} md={12}>
                    <Row>
                        <h5>COMMENTS SECTION:</h5>
                        {/* current comments */}
                        <Col xs={12} md={6}>

                        </Col>
                        {/* New comments */}
                        <Col xs={12} md={6}>
                            <CommentsForm />
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}
