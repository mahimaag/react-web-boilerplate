import React from 'react';
import { FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox } from 'react-bootstrap';
import {LoginFormFields} from '../../../constants/index';

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
    }

    render() {
        return (
            <form>
                <FormGroup controlId="formControlsEmail">
                    <ControlLabel>Email/Username</ControlLabel>
                    <FormControl id="formControlsEmail" type="email" label="Email address"
                                 value={this.state.email} placeholder="Enter email" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <FormGroup controlId="formControlsPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl id="formControlsPassword" type="password" label="Password" value={this.state.password} placeholder="Password" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <Checkbox checked={this.state.rememberMe} label="ememberMe" onChange={(e) => this.handleChange(e, 'rememberMe')}>
                    Remember Me
                </Checkbox>
            </form>
        );
    }
}