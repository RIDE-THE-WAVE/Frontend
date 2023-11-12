// options 이름 바꿔도 괜찮을 듯?

export const setUsers = (options) => ({
    type: 'SET_USERS',
    payload: options,
});

export const setRecords = (options) => ({
    type: 'SET_RECORDS',
    payload: options,
});

export const setUserComments = (options) => ({
    type: 'SET_COMMENTS',
    payload: options,
});

export const setDevelopData = (options) => ({
    type: 'SET_DEVELOPED_DATA',
    payload: options,
});