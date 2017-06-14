/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.scss';
import LoginForm from '../../components/LoginForm';
import {Button} from 'react-bootstrap'

class LandingPage extends Component {
    componentDidMount() {
    }

    render() {
        return (
        <div>
            <h1>Login page</h1>
            <LoginForm />
            <Button type="submit" className="btn_primary">
                Login
            </Button>
        </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    // getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const LandingPageContaienr = connect(mapStateToProps)(LandingPage);
export default LandingPageContaienr;
