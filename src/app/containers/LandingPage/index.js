/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.scss';
import LoginForm from '../../components/LoginForm';
import {login} from './action';

class LandingPage extends Component {
    componentDidMount() {
    }

    login = (formFields) => {
        this.props.dispatch(login(formFields));
    };

    render() {
        return (
        <div>
            <h1>Login page</h1>
            <LoginForm onLogin={(formFields) => this.login(formFields)}/>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    // getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const LandingPageContaienr = connect(mapStateToProps)(LandingPage);
export default LandingPageContaienr;
