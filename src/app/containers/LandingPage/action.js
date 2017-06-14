/**
 * Created by intelligrape on 6/6/17.
 */
import { ApiUrl } from './constants';
import { RequestMethod } from '../../../constants'
import request from '../../../utils/request';

import { LoginActions, LoginMockedResponse } from './constants';

const login = (payload) => {
    console.log('LandingPage#loginAction', payload);
    return (dispatch) => {
        dispatch({type:LoginActions.LoginSuccess});
        setTimeout(() => {
            console.log('LandingPage#loginAction... Firing success event');
            dispatch({type: LoginActions.LoginSuccess, data: LoginMockedResponse});
        }, 100);
    }
};

export { login };
