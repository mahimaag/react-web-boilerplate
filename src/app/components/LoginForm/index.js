import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox, Button } from 'react-bootstrap';
import {LoginFormFields} from '../../../constants/index';
import AwareXButton from '../AwareXButton'
import styles from './style.scss';
import loginRightImage from '../../../assets/images/login_right_img.png';

const InitialState = Object.freeze({
    email: '',
    password: '',
    rememberMe: false
});

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...InitialState };
    }

    getValidationState = () => {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange = (e) => {
        if(e.target){
            switch (e.target.type){
                case LoginFormFields.email:
                    this.setState({email: e.target.value});
                    break;
                case LoginFormFields.password:
                    this.setState({password: e.target.value});
                    break;
                case LoginFormFields.checkbox:
                    this.setState({rememberMe: e.target.checked});
                    break;
                default:
                    break;
            }
        }
        console.log(this.state);
    };

    render() {
        return (
            <form className="customFormContainer">
                <div className="col-md-offset-4 col-md-4 customWrapper">
                <div className="row">
                <div className="col-md-7">
                    <h1 className="loginHeading">LOG IN</h1>
                </div>
            </div>
            <div className="row">
                <div className = "col-md-7">
                <FormGroup controlId="formControlsEmail" className="customFormGroup">
                    <ControlLabel className="custom-label">Email/Username</ControlLabel>
                    <FormControl id="formControlsEmail" className="customFormControl" type="email" label="Email address"
                                 value={this.state.email} placeholder="Enter email" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <FormGroup controlId="formControlsPassword" className="customFormGroup">
                    <ControlLabel className="custom-label">Password</ControlLabel>
                    <FormControl id="formControlsPassword" className="customFormControl" type="password" label="Password" value={this.state.password} placeholder="Password" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <Checkbox checked={this.state.rememberMe} label="ememberMe" onChange={(e) => this.handleChange(e, 'rememberMe')} id="rememberMe" className="custom-checkbox">
                    <label htmlFor="rememberMe"> Remember Me </label>
                </Checkbox>
                <Button type="submit" className="btn-custom" onClick={() => this.props.onLogin(this.state)}>
                    Login
                </Button>
                </div>
            </div>
            </div>
                <div className="col-md-2 customImageContainer">
                    <img src={loginRightImage}/>
                </div>
                <AwareXButton type="btn_primary" text="Login" onClick={() => this.props.onLogin(this.state)}/>
            </form>
        );
    }
}

LoginForm.PropTypes = {
    onLogin: PropTypes.func.isRequired
};