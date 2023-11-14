const initialState = {};

const developedDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_DEVELOPED_DATA':
      return action.payload;
    case 'SET_CURRENT_USER_DATA':
      return{
        ...state,
        current_user_data: action.payload,
      };
    case 'SET_CURRENT_USER':
      return{
        ...state,
        current_user: action.payload,
      };
    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default developedDataReducer;