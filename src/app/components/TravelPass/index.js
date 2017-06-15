import React from 'react';
import style from './style.scss';

export default class TravelPass extends React.Component{
    render () {
        return (
            <div className="card">
                <h3 className="title">My Current Bill</h3>
                <p>Your Current Bill Amount</p>
                <div className="content">
                    <div className="bill-amount">
                        <span className="amount">$100.00</span>
                    </div>
                    <div className="bill-details">
                        <span>Issue Date: 16/12/2016</span>
                        <span>Past Due: $15.00</span>
                    </div>
                    <div className="button-actions">
                        <div>
                            <a href="#" className="btn">View Bills</a>
                         </div>
                         <div>   
                            <a href="#" className="btn">Pay my Bill</a>
                         </div>   
                    </div>
                </div>
            </div>            
        )
    }
}