import { createReducer } from '../../utils/redux';

import {
    CHANGE_TYPE_ROOM,
} from '../../actions/ChangeTypeRoom';

function requestTypeRoom(state, typeRoom) {
    return typeRoom;
}

export default createReducer([], {
    [CHANGE_TYPE_ROOM]: requestTypeRoom,
})