import { all } from 'redux-saga/effects';
import watchRoom from './requestRoomSaga';

export default function* rootSaga() {
	yield all([
		watchRoom(),
	])
}