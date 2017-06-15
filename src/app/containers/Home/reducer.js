/**
 * Created by intelligrape on 6/6/17.
 */

// DO NOT USE PER SCREEN REDUCER.
// const initialState = {
//     items: [],
//     limit: 0,
//     offset: 0,
//     total: 0
// };

// import {ACTION} from './constants';
// export default function homeReducer(state = initialState, action) {
//     switch (action.type) {
//         case ACTION.UPDATE_HOME :
//             let items = [...state.items, ...action.data.items];
//             return {...state, items:items, limit:action.data.limit, offset:action.data.offset, total:action.data.total};
//         default:
//             return state;
//     }
// }
