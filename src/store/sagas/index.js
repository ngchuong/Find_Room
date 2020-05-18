import { all } from 'redux-saga/effects';
import watchRoom from './requestRoomSaga';
import watchUsers from './requestUserSaga';
export default function* rootSaga() {
	yield all([
		watchRoom(),
		watchUsers(),
	])
}