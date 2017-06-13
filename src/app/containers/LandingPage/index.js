/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.scss';
import LoginForm from '../../components/LoginForm';

class LandingPage extends Component {
    componentDidMount() {
    }

    render() {
        return (
        <div>
            <h1>Login page</h1>
            <LoginForm />
            <button className="btn_primary"> 
                Primary Button
            </button>
            <button className="btn_secondary" >
            Secondary Button
            </button>
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
