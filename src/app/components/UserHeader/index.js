/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import Help from '../Help';
import ActionBarDropDown from '../ActionBarDropDown';
import Logout from '../Logout';
import { Link } from 'react-router-dom';
import AXLogo from '../AXLogo';

//Importing Styles
import './style.scss';

class UserHeader extends React.Component {
    render() {
        return (
            <header className="user_header row">
                <div className="col-md-6">
                    <AXLogo/>
                </div>
                {this.props.user && this.props.user.isLoggedIn ?
                    <div className="col-md-6 action_items">
                        <Help/>
                        <ActionBarDropDown/>
                        <Logout />
                    </div>
                    : null}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(UserHeader);
