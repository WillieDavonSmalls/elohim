import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class AccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert("current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    componentDidMount() {
        fetch('/api/allaccounts')
        .then(response => response.json())
        .then(data => this.setState({ accounts: data }));
    }


    
    render() {

        return (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <Table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Account Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.accounts.map(account =>
                                <tr data-id={account.BORDEREAUID} key={account.BORDEREAUID}>
                                    <td>{account.STATUS} </td>
                                    <td>{account.INSUREDNAME}</td>
                                    <td>{account.SUBMITDATE}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}