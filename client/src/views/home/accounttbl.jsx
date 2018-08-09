import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './accounttbl.css'

export default class AccountList extends Component {
    handleClick(event) {        
        const target = event.target;
        const value = target.key; 

        alert('The link was clicked. hello', value);
    }

    
    render() {

        return (
                <div className="">
                    <Table className="">
                        <thead>
                            <tr>
                                <th align="center">Status</th>
                                <th align="center">Account Name</th>
                                <th align="center">Date</th>
                            </tr>
                        </thead>
                        <tbody className="accountTable">
                            {this.props.accounts.map(account =>
                                <tr data-id={account.BORDEREAUID} key={account.BORDEREAUID} onClick={this.handleClick}>
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