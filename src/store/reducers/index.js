import { combineReducers } from "redux";
import rooms from './rooms.js';
import users from './users.js';
import ui from './ui.js';
import typeRoom from './typeRoom.js';

export default combineReducers({
	rooms,
	users,
	ui,
	typeRoom
})