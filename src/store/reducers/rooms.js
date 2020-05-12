import { createReducer } from '../../utils/redux';

import {
    GET_LIST_ROOM_SUCCEED,
} from '../../actions/Room';

function requestRoomListSuccess(state, roomList) {
    return roomList;
}

export default createReducer([], {
    [GET_LIST_ROOM_SUCCEED]: requestRoomListSuccess,
})