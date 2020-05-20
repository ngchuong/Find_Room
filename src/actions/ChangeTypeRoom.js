export const CHANGE_TYPE_ROOM = "CHANGE_TYPE_ROOM";

export const changeTypeRoom = {
	changeType: (typeRoom) =>({
		type: CHANGE_TYPE_ROOM,
		payload: typeRoom
	})
}