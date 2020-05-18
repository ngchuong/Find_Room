export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCEED = 'GET_USER_SUCCEED';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCEED = 'ADD_USER_SUCCEED';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';


export const getUsers = {
    start: () => ({
        type: GET_USER_START,
    }),

    succeed: (result) => ({
        type: GET_USER_SUCCEED,
        payload: result,
    }),

    failed: (error)=> ({
        type: GET_USER_FAILED,
        payload: error,
    })
};

export const addUsers = {
    start: () => ({
        type: ADD_USER_START,
    }),

    succeed: (result) => ({
        type: ADD_USER_SUCCEED,
        payload: result,
    }),

    failed: (error)=> ({
        type: ADD_USER_FAILED,
        payload: error,
    })
};