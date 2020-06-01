import {
    ADD_USER_SUCCEED,
    ADD_USER_FAILED,
} from '../../actions/User.js';
import {
    PUSH_ERR
} from '../../actions/Err.js';

import {
    CREATE_ROOM_SUCCEED,
    CREATE_ROOM_FAILED,
} from '../../actions/Room.js';

const ui = (state = { dialog: null }, action) => {
    let message = "";
    switch (action.type) {
        case PUSH_ERR:
            message = "Vui lòng đăng nhập trước khi đăng bài !";
            return {
                ...state,
                dialog: message
            }
        case ADD_USER_SUCCEED:
            message = "Đăng ký thành công !";
            return {
                ...state,
                dialog: message
            }
        case ADD_USER_FAILED:
            message = "Đăng ký thất bại !";
            return {
                ...state,
                dialog: message
            }
        case CREATE_ROOM_SUCCEED:
            message = "Đăng bài thành công !";
            return {
                ...state,
                dialog: message
            }
        case CREATE_ROOM_FAILED:
            message = "Đăng bài thất bại !";
            return {
                ...state,
                dialog: message
            }
        default:
            return state;
    }
}

export default ui;