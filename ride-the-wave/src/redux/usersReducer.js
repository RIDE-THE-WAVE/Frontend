const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload;
    // Handle actions related to records here
    default:
      return state;
  }
};

export default usersReducer;