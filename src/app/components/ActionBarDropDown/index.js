/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Dropdown } from 'react-bootstrap';

//Importing Styles
import './style.scss';

class ActionBarDropDown extends React.Component {

    render() {
        const items = ['Action1', 'Action2'];
        const user = { accountType: 'Hybrid'};
        return (
            <div>
                <div className="dropdown">
                    <a href="#" className="dropdown-toggle" id="dLabel" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
                        { user.accountType } 
                        <span className="caret"></span> 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dLabel">
                        {
                            items.map((item, index) => (
                                <li key={index} > {item}</li> 
                            ))
                        }
                        <dropdownChildren />
                    </ul>
                </div>
            </div>
        );
    }
}

export default ActionBarDropDown;
