import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_LIST_ROOM_START,
    CREATE_ROOM_START,
    getListRoom,
    createRoom,
} from '../../actions/Room';

import {
    getRoomListFactory,
    createRoomSagaFactory
} from '../../api/rooms';

function* requestRoomListSaga() {
    try {
        const api = getRoomListFactory();
        const response = yield call(api);

        yield put(getListRoom.succeed(response));
    } catch (err) {
        yield put(getListRoom.failed(err));
    }
}

function* createRoomSaga(action) {
    const room = action.payload;
    try {
        const api = createRoomSagaFactory();
        const response = yield call(api, room);
        console.log(response);
        yield put(createRoom.succeed(response));
    } catch (err) {
        yield put(createRoom.failed(err));
    }
}
export default function* watchRoom() {
    yield takeLatest(GET_LIST_ROOM_START, requestRoomListSaga);
    yield takeLatest(CREATE_ROOM_START, createRoomSaga);
}