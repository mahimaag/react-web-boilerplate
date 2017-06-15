import React from 'react';
import style from './style.scss';

export default class Greeting extends React.Component{
    render () {
        return (
            <div className="card">
                <h3 className="title bold">
                    <strong>Welcome</strong>
                </h3>
                <div className="content">
                   <p> Line# </p>
                   <p> 3232-3232-3232 </p>
                </div>
            </div>            
        )
    }
}