import { createReducer } from '../../utils/redux';

import {
    GET_USER_SUCCEED,
    ADD_USER_SUCCEED
} from '../../actions/User.js';

function requestUsersSuccess(state, users) {
    return users;
}

function addUsersSuccess(state, payload) {
    return [...state, payload];
}

export default createReducer([], {
    [GET_USER_SUCCEED]: requestUsersSuccess,
    [ADD_USER_SUCCEED]: addUsersSuccess,
})