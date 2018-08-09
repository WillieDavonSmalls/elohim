import React, { Component } from 'react';
import { FormGroup, Label, Button, Form, Col, Row, Grid } from 'react-bootstrap';



export default class LoginPage extends Component {


    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        }
    }

    render() {
        return (
            <Grid>
                <Row className="main-row">
                    <Col xs={12} md={12}>
                        <div>
                            <Form onSubmit={this.props.handleLogIn}>
                                <Col xs={12} md={12}>
                                    <FormGroup>
                                        <Label htmlFor="username"> Username: </Label>
                                        <input type="text" id="username" name="username" placeholder="Enter Username"
                                            value={this.props.username}
                                            onChange={this.props.handleInputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password"> Password: </Label>
                                        <input type="text" id="password" name="password" placeholder="Enter Password"
                                            value={this.props.password}
                                            onChange={this.props.handleInputChange} />
                                    </FormGroup>
                                </Col>
                                <Button type="submit" color="primary"> Login </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


