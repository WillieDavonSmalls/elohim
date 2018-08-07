import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    render() {
        return (
            <div className="container">
                Hello Jokers
            </div>
        );
    }
}