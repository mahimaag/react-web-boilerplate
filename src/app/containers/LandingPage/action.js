/**
 * Created by intelligrape on 6/6/17.
 */
import { LoginMockedResponse } from './constants';
import { RequestMethod, Apis } from 'constants/network'
// import request from '../../../utils/request';

import { UserActions } from 'constants/actions';

const login = (payload) => {
    console.log('LandingPage#loginAction', payload);
    return (dispatch) => {
        dispatch({type: UserActions.Login.Start });
        setTimeout(() => {
            console.log('LandingPage#loginAction... Firing success event');
            dispatch({type: UserActions.Login.Succcess, data: LoginMockedResponse});
        }, 100);
    }
};

export { login };
