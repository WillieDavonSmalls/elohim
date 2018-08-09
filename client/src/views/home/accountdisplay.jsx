import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import './accountdisplay.css';
import './btnsubmitcomment';
import CommentsForm from './commentsform';

export default class AccountDisplay extends Component {
    render() {
  console.log(this.props.accountdata);

        return (
            <div>
                {/* Heading */}
                <Row>
                    <Col xs={12} md={12}>
                        <h3>{this.props.accountdata.InsuredName}</h3>
                        <p><strong>{this.props.accountdata.StreetAddress}</strong></p>
                        <p><strong>{this.props.accountdata.City} {this.props.accountdata.State} {this.props.accountdata.Zip}</strong></p>
                    </Col>
                </Row>

                {/* Risk Information */}
                <Row>
                    <Col xs={12} md={12}>
                        <h5>BOUND RISK:</h5>
                        <Col xs={12} md={6}>
                            <p><strong>Policy Number: </strong>{this.props.accountdata.PolicyNumber}</p>
                            <p><strong>Transaction: </strong>{this.props.accountdata.StatusCode}</p>
                            <p><strong>Policy Effective Date: </strong>{this.props.accountdata.EffectiveDate}</p>
                            <p><strong>Policy Expiration Date: </strong>{this.props.accountdata.ExpirationDate}</p>
                            <p><strong>Transaction Date: </strong>{this.props.accountdata.TransactionDate}</p>
                            <p><strong>Occupied By: </strong>{this.props.accountdata.OccupiedBy}</p>
                        </Col>
                    </Col>
                </Row>

                {/* Financial Information */}
                <Row>
                    <Col xs={12} md={12}>
                        <h5>FINANCIAL INFORMATION:</h5>
                        <Col xs={12} md={6}>
                            <p><i><strong>Coverage Values:</strong></i></p>
                            <p>Coverage A: {this.props.accountdata.HOCovLim_A}</p>
                            <p>Coverage B: {this.props.accountdata.HOCovLim_B}</p>
                            <p>Coverage C: {this.props.accountdata.HOCovLim_C}</p>
                            <p>Coverage D: {this.props.accountdata.HOCovLim_D}</p>
                            <p>Coverage E: {this.props.accountdata.HOCovLim_E}</p>
                            <p>Coverage F: {this.props.accountdata.HOCovLim_F}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><i><strong>Deductible and Flood Policy Information:</strong></i></p>
                            <p>Wind: {this.props.accountdata.WSDedPerc}%</p>
                            <p>Earthquake: {this.props.accountdata.EQDedPerc}%</p>
                            <p>AOP Deductible: {this.props.accountdata.AOPDed}</p>
                            <p>Primary Flood Insurance Policy: {this.props.accountdata.PrimaryFloodCoveredFlag}</p>
                        </Col>
                    </Col>
                </Row>

                {/* Exposure Information */}
                <Col xs={12} md={12}>
                    <Row>
                        <h5>EXPOSURE INFORMATION:</h5>
                        <Col xs={12} md={6}>
                            <p><i><strong>Primary Characteristics:</strong></i></p>
                            <p>Construction: {this.props.accountdata.ConstructionType}</p>
                            <p>Number of Stories: {this.props.accountdata.NumStories}</p>
                            <p>Year Built: {this.props.accountdata.YearBuilt}</p>
                            <p>Floor Area: {this.props.accountdata.SqFootage}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p><i><strong>Secondary Characteristics:</strong></i></p>
                            <p>Open Protection: {this.props.accountdata.OpeningProtection}</p>
                            <p>Roof Anchor: {this.props.accountdata.RoofConnection}</p>
                            <p>Roof Geometry: {this.props.accountdata.RoofType}</p>
                            <p>Roof Sheathing: {this.props.accountdata.RoofSheathing}</p>
                            <p>Roof Age: {this.props.accountdata.RoofAge}</p>
                            <p>Year Upgrade: {this.props.accountdata.YearRefurbished}</p>
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
