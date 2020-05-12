import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_LIST_ROOM_START,
    getListRoom,
} from '../../actions/Room';

import { getRoomListFactory } from '../../api/rooms';

function* requestRoomListSaga() {
    try {
        const api = getRoomListFactory();
        const response = yield call(api);
        
        yield put(getListRoom.succeed(response));
    } catch (err) {
        yield put(getListRoom.failed(err));
    }
}

export default function* watchRoom() {
    yield takeLatest(GET_LIST_ROOM_START, requestRoomListSaga);
}