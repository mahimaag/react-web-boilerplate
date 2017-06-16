/**
 * Created by intelligrape on 6/6/17.
 */
// import {API_URL, PAGE_LIMIT, ACTION} from './constants';
// import {requestMethod} from '../../../constants'
import request from '../../../utils/request';
import { Apis } from 'constants/network';
import { AccountActions } from 'constants/actions';
import {Accounts}  from './../../data/data.js'

// export function getHomeContent(pageOffset) {
//     // console.log("=IN=")

//     return (dispatch) => {
//         request(API_URL.home, {method: requestMethod.GET}, {pageLimit: PAGE_LIMIT, pageOffset})
//             .catch((error) => {
//                 console.log("==================",error)

//             })
//             .then((json) => {
//                 dispatch({type:ACTION.UPDATE_HOME ,data: json.data});
//                 console.log("==================",json.data.limit)

//                 // console.log('result', json);
//             });
//     }
// }

/*This method will use when actual API call [start]*/
function fetchAccounts() {
  const URL = "ENTER API URL";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}
/*This method will use when actual API call [end]*/

export const getUserAccount = () => {
    return (dispatch) => {
        dispatch({ type: AccountActions.GetUserAccount.Start});
        //fetchAccounts().then(([response, json])=>{  //Uncomment it when actual API call
            setTimeout(() => {
                dispatch( {type: AccountActions.GetUserAccount.Success, data:Accounts}); //Replace Accounts with json variable when actual API will call
            }, 1000);
      //  })

    }
}

export const getAccountType = (selectedAccount) => {
  console.log("KKKKKKKKKKKKK",selectedAccount)
    return (dispatch) => {
            dispatch( {type: AccountActions.GetUserAccount.StateChange, selectedAccount:selectedAccount});
        }
}
