const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    // Handle actions related to records here
    default:
      return state;
  }
};

export default commentsReducer;