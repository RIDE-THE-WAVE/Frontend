const initialState = [];

const commentsReducer = (state = initialState, action) => {
  console.log('state :', state);
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    case 'ADD_COMMENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;