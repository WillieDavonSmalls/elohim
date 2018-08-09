import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './accounttbl.css'

export default class AccountList extends Component {
    handleClick(bourdereauid) {
        this.props.updateAccountDisplay(bourdereauid);

        // alert('The link was clicked. hello ' + bourdereauid);
    }

    
    render() {

        return (
                <div className="">
                    <Table className="accountTable">
                        <thead>
                            <tr>
                                <th align="center">Status</th>
                                <th align="center">Account Name</th>
                                <th align="center">Date</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {this.props.accounts.map(account =>
                                <tr data-id={account.BORDEREAUID} key={account.BORDEREAUID} onClick={() => this.handleClick(account.BORDEREAUID)}>
                                    <td>{account.STATUS} </td>
                                    <td>{account.INSUREDNAME}</td>
                                    <td>{account.SUBMITDATE}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
        );
    }
}