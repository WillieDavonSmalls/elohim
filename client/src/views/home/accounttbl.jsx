import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class AccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/api/allaccounts', {
            method: 'GET'
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
            console.log(response);
        }).then(function (data) {
            self.setState({ accounts: data });
        }).catch(err => {
            console.log('Error: ', error);
        })
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
                                <tr key={account.BORDEREAUID}>
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