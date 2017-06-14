/**
 * Created by intelligrape on 6/6/17.
 */
import {LoginActions} from './constants';
const initialState = {
    login: {},
    isFetching: true
};

const landingPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LoginActions.LoginSuccess:
            return {
                ...state,
                login: {
                    isLogin: true,
                    data: action.data,
                }
            };
        case LoginActions.LoginFailure:
            return {
                ...state,
                login: {
                    isLogin: false,
                    error:action.error.message
                }
            };
        default:
            return state;
    }
};

export default landingPageReducer;
