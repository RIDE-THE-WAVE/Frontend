const initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    case 'ADD_COMMENT':
      return [...state, action.payload];
    case 'UPDATE_COMMENT':
      const commentForFixIndex = state.findIndex((comment) => comment.id === action.payload.id);
      if (commentForFixIndex !== -1) {
        return [
          ...state.slice(0, commentForFixIndex),
          {
            ...state[commentForFixIndex],
            content: action.payload.content,
          },
          ...state.slice(commentForFixIndex + 1),
        ];
      }
      return ;
    case 'DELETE_COMMENT':
      return state.map((comment) => (comment.id === action.payload) ? { ...comment, available: false } : comment);
    default:
      return state;
  }
};

export default commentsReducer;