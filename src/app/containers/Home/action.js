/**
 * Created by intelligrape on 6/6/17.
 */
import {API_URL, PAGE_LIMIT, ACTION} from './constants';
import {requestMethod} from '../../../constants'
import request from '../../../utils/request';

export function getHomeContent(pageOffset) {
    // console.log("=IN=")

    return (dispatch) => {
        request(API_URL.home, {method: requestMethod.GET}, {pageLimit: PAGE_LIMIT, pageOffset})
            .catch((error) => {
                console.log("==================",error)

            })
            .then((json) => {
                dispatch({type:ACTION.UPDATE_HOME ,data: json.data});
                console.log("==================",json.data.limit)

                // console.log('result', json);
            });
    }
}
