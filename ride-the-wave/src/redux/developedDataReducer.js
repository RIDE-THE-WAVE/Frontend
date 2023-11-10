const initialState = {};

const developedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DEVELOPED_DATA':
      return action.payload;
    // Handle actions related to records here
    default:
      return state;
  }
};

export default developedDataReducer;