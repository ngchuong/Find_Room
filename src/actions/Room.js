export const GET_LIST_ROOM_START = 'GET_LIST_ROOM_START';
export const GET_LIST_ROOM_SUCCEED = 'GET_LIST_ROOM_SUCCEED';
export const GET_LIST_ROOM_FAILED = 'GET_LIST_ROOM_FAILED';

export const CREATE_ROOM_START = 'CREATE_ROOM_START';
export const CREATE_ROOM_SUCCEED = 'CREATE_ROOM_SUCCEED';
export const CREATE_ROOM_FAILED = 'CREATE_ROOM_FAILED';

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

export const createRoom = {
    start: (room) => ({
        type: CREATE_ROOM_START,
        payload: room
    }),

    succeed: (result) => ({
        type: CREATE_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (error)=> ({
        type: CREATE_ROOM_FAILED,
        payload: error,
    })
};
