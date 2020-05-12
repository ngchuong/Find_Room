export const GET_LIST_ROOM_START = 'GET_LIST_ROOM_START';
export const GET_LIST_ROOM_SUCCEED = 'GET_LIST_ROOM_SUCCEED';
export const GET_LIST_ROOM_FAILED = 'GET_LIST_ROOM_FAILED';


export const getListRoom = {
    start: () => ({
        type: GET_LIST_ROOM_START,
    }),

    succeed: (result) => ({
        type: GET_LIST_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (error)=> ({
        type: GET_LIST_ROOM_FAILED,
        payload: error,
    })
};