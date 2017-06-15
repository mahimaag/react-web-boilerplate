/**
 * Created by intelligrape on 6/6/17.
 */
import { AccountActions } from 'constants/actions';
import _ from 'lodash';

// Represents an user account object and its current state.
const initialState = Object.freeze({
    isFetching: true,
    detail: {},                // user object from Apis.    
    error: {}                  // error from Apis. 
});

const AccountReducer = (state = initialState, action) => {
    let duplicateState = _.cloneDeep(state);
    switch(action.type) {
        case AccountActions.GetUserAccount.Success:
            duplicateState.isFetching = false;
            break;

        case AccountActions.GetUserAccount.Failure:
            duplicateState.isFetching = false;
            break;

        case AccountActions.GetUserAccount.Start:
            duplicateState.isFetching = true;
            break;
        default:
            break;
    }
    return duplicateState;
};

export default AccountReducer;
