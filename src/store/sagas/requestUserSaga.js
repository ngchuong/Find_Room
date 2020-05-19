import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_USER_START,
    getUsers,
    ADD_USER_START,
    addUsers,
} from '../../actions/User.js';

import {
    getUsersFactory,
    registerUsersFactory,
} from '../../api/users';

function* requestUsersSaga() {
    try {
        const api = getUsersFactory();
        const response = yield call(api);

        yield put(getUsers.succeed(response));
    } catch (err) {
        yield put(getUsers.failed(err));
    }
}

function* registerUsersSaga(action) {
    const user = action.payload;
    try {
        const api = registerUsersFactory();
        const response = yield call(api, user);

        yield put(addUsers.succeed(response));
    } catch (err) {
        yield put(addUsers.failed(err));
    }
}
export default function* watchUsers() {
    yield takeLatest(GET_USER_START, requestUsersSaga);
    yield takeLatest(ADD_USER_START, registerUsersSaga);
}