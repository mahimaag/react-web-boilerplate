/**
 * Created by intelligrape on 6/6/17.
 */

/**
 * DO NOT USE REDUCER PER PAGE. REDUCER REPRESENT STATE OF ENTITIES.
 */
import { LoginActions } from './constants';
import _ from 'lodash';

const initialState = Object.freeze({
    login: {},
    isFetching: true
});

const landingPageReducer = (state = initialState, action) => {
    let duplicateState = _.cloneDeep(state);
    switch(action.type) {
        case LoginActions.LoginSuccess:
            duplicateState.login = {
                isLogin: true,
                data: action.data,
            };
            break;
        case LoginActions.LoginFailure:
            duplicateState.login = {
                isLogin: false,
                error:action.error.message
            };
            break;
        default:
            break;
    }
    return duplicateState;
};

// export default landingPageReducer;
