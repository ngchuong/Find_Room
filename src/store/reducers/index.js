import { combineReducers } from "redux";
import rooms from './rooms.js';
import users from './users.js';
export default combineReducers({
	rooms,
	users
})