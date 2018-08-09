import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import './accountdisplay.css';
import './btnsubmitcomment';
import CommentsForm from './commentsform';

export default class AccountDisplay extends Component {

    //For Form
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '',
            account: {
                BORDEREAUID: 870,
                STATUS: "BOUND",
                SubmitDate: "2018-06-30T04:00:00.000Z",
                InsuredName: "Gauge Stein",
                ProgramAdministrator: "MCO",
                PolicyNumber: "MCO903687",
                EffectiveDate: "2018-06-30T04:00:00.000Z",
                ExpirationDate: "2019-06-30T04:00:00.000Z",
                StatusCode: "Renewal",
                TransactionDate: "2018-06-30T04:00:00.000Z",
                StreetAddress: "482 Homestead St. ",
                City: "Naples ",
                County: "Collier",
                State: "FL",
                Zip: "34102",
                OccupiedBy: "Owner",
                ConstructionType: "Joisted Masonry",
                YearBuilt: 1994,
                NumStories: "2",
                YearRefurbished: 2014,
                SqFootage: 6942,
                PrimaryFloodCoveredFlag: "Yes",
                WSDedPerc: 5,
                AOPDed: 10000,
                EQDedPerc: 0,
                HOCovLim_A: 3914000,
                HOCovLim_B: 120000,
                HOCovLim_C: 1500000,
                HOCovLim_D: 300000,
                HOCovLim_E: 500000,
                HOCovLim_F: 10000,
                RoofAge: "0-5 years",
                RoofType: "Hip Roof",
                OpeningProtection: "None or some Glazed openings",
                RoofConnection: "Clips",
                RoofSheathing: "8d Nails - Any schedule"
            }
        };
    }



    render() {

        return (
            <div>
                {/* Heading */}
                <Row>
                    <Col xs={12} md={12}>
                        <h3>{this.state.account.InsuredName}</h3>
                        <p><strong>{this.state.account.StreetAddress}</strong></p>
                        <p><strong>{this.state.account.City} {this.state.account.State} {this.state.account.Zip}</strong></p>
                    </Col>
                </Row>

                {/* Risk Information */}
                <Row>
                    <Col xs={12} md={12}>
                        <h5>BOUND RISK:</h5>
                        <Col xs={12} md={6}>
                            <p><strong>Policy Number: </strong>{this.state.account.InsuredName}</p>
                            <p><strong>Transaction: </strong>{this.state.account.InsuredName}</p>
                            <p><strong>Policy Effective Date: </strong>{this.state.account.InsuredName}</p>
                            <p><strong>Transaction Effective Date: </strong>{this.state.account.InsuredName}</p>
                            <p><strong>Occupied By: </strong>{this.state.account.InsuredName}</p>
                        </Col>
                    </Col>
                </Row>

                {/* Financial Information */}
                <Row>
                    <Col xs={12} md={12}>
                        <h5>FINANCIAL INFORMATION:</h5>
                        <Col xs={12} md={6}>
                            <p><i><strong>Coverage Values:</strong></i></p>
                            <p>Coverage A: {this.state.account.HOCovLim_A}</p>
                            <p>Coverage B: {this.state.account.HOCovLim_B}</p>
                            <p>Coverage C: {this.state.account.HOCovLim_C}</p>
                            <p>Coverage D: {this.state.account.HOCovLim_D}</p>
                            <p>Coverage E: 1{this.state.account.HOCovLim_E}</p>
                            <p>Coverage F: {this.state.account.HOCovLim_F}</p>
                            <p>Total Insured Value (TIV): {this.state.account.HOCovLim_A}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><i><strong>Deductible and Flood Policy Information:</strong></i></p>
                            <p>Wind: {this.state.account.WSDedPerc}</p>
                            <p>Earthquake: {this.state.account.EQDedPerc}</p>
                            <p>WS Site Ded as % of A: {this.state.account.WSDedPerc}</p>
                            <p>AOP Deductible: {this.state.account.AOPDed}</p>
                            <p>Primary Flood Insurance Policy: {this.state.account.PrimaryFloodCoveredFlag}</p>
                        </Col>
                    </Col>
                </Row>

                {/* Exposure Information */}
                <Col xs={12} md={12}>
                    <Row>
                        <h5>EXPOSURE INFORMATION:</h5>
                        <Col xs={12} md={6}>
                            <p><i><strong>Primary Characteristics:</strong></i></p>
                            <p>Construction: {this.state.account.ConstructionType}</p>
                            <p>Number of Stories: {this.state.account.NumStories}</p>
                            <p>Year Built: {this.state.account.YearBuilt}</p>
                            <p>Floor Area: {this.state.account.SqFootage}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><i><strong>Secondary Characteristics:</strong></i></p>
                            <p>Open Protection: {this.state.account.OpeningProtection}</p>
                            <p>Roof Anchor: {this.state.account.RoofConnection}</p>
                            <p>Roof Geometry: {this.state.account.RoofType}</p>
                            <p>Roof Sheathing: {this.state.account.RoofSheathing}</p>
                            <p>Roof Age: {this.state.account.RoofAge}</p>
                            <p>Year Upgrade: {this.state.account.YearRefurbished}</p>
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
                            <p>Comments:</p>
                            <Col xs={12} md={12}>
                                <ListGroup>
                                    <ListGroupItem>Item 1</ListGroupItem>
                                    <ListGroupItem>Item 2</ListGroupItem>
                                    <ListGroupItem>...</ListGroupItem>
                                </ListGroup>
                            </Col>
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
