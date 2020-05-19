import {
    ADD_USER_SUCCEED,
    ADD_USER_FAILED,
} from '../../actions/User.js';

const ui = (state = { dialog: null }, action) => {
    let message = "";
    switch (action.type) {
        case ADD_USER_SUCCEED:
            message = "Add succeed !";
            return {
                ...state,
                dialog: message
            }
        case ADD_USER_FAILED:
            message = "Add failed !";
            return {
                ...state,
                dialog: message
            }
        default:
            return state;
    }
}

export default ui;