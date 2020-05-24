import { createReducer } from '../../utils/redux';

import {
    GET_LIST_ROOM_SUCCEED,
    CREATE_ROOM_SUCCEED,
} from '../../actions/Room';

function requestRoomListSuccess(state, roomList) {
    return roomList;
}

function creatRoomSuccess(state, payload) {
    return [...state, payload];
}

export default createReducer([], {
    [GET_LIST_ROOM_SUCCEED]: requestRoomListSuccess,
    [CREATE_ROOM_SUCCEED]: creatRoomSuccess,
})