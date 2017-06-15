/**
 * Created by intelligrape on 6/6/17.
 */
import { UserActions } from 'constants/actions';
import _ from 'lodash';

// Represents an user object and its current state.
const initialState = Object.freeze({
    isLoggedIn: false,
    isLoggingIn: false,
    detail: {},                // user object from Apis.    
    error: {}                  // error from Apis. 
});

const UserReducer = (state = initialState, action) => {
    let duplicateState = _.cloneDeep(state);
    switch(action.type) {
        case UserActions.Login.Succcess:
            duplicateState.isLoggedIn = true;
            duplicateState.isLoggingIn = false;
            duplicateState.detail = action.data;
            break;

        case UserActions.Login.Failure:
            duplicateState.isLoggedIn = false;
            duplicateState.isLoggingIn = false;
            duplicateState.error = action.error;
            break;

        case UserActions.Login.Start:
            duplicateState.isLoggedIn = false;
            duplicateState.isLoggingIn = true;
            break;
        default:
            break;
    }
    return duplicateState;
};

export default UserReducer;
