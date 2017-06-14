/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import Help from '../Help';
import ActionBarDropDown from '../ActionBarDropDown';
import Logout from '../Logout';
import { Link } from 'react-router-dom';

//Importing Styles
import './style.scss';

class UserHeader extends React.Component {
    render() {
        return (
            <header className="user_header row">
                <div className="col-md-6">
                    Logo here
                </div>
                <div className="col-md-6 action_items">
                    <Help/>
                    <ActionBarDropDown/>
                    <Logout />
                </div>
            </header>
        );
    }
}

export default UserHeader;
