const initialState = {};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.payload;
    // Handle actions related to records here
    default:
      return state;
  }
};

export default recordsReducer;