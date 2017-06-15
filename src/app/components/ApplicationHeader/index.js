/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Importing Styles
import './style.scss';

class ApplicationHeader extends React.Component {
    render() {
        return (
            <header className="app_header">
                {this.props.user && this.props.user.isLoggedIn ?
                    <Link to="/home">
                        Back to Home
                    </Link>
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

export default connect(mapStateToProps)(ApplicationHeader);
