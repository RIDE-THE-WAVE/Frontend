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
    case 'SET_SIDE':
        const updateUserSide = state.users.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              records_display_option: [
                {
                  ...data.records_display_option[0],
                  freestyle: {
                    ...data.records_display_option[0].freestyle,
                    side: action.payload.show,
                  },
                },
              ],
            }
          : data
      );
        return {
          ...state,
          users: updateUserSide,
          current_user_data: {
            ...state.current_user_data,
            records_display_option: [
              {
                ...state.current_user_data.records_display_option[0],
                freestyle: {
                  ...state.current_user_data.records_display_option[0].freestyle,
                  side: action.payload.show,
                }
              }
            ],
          }
        };
    case 'SET_FLIP':
      const updateUserFlip = state.users.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              records_display_option: [
                {
                  ...data.records_display_option[0],
                  freestyle: {
                    ...data.records_display_option[0].freestyle,
                    flip: action.payload.show,
                  },
                },
              ],
            }
          : data
      );
        return {
          ...state,
          users: updateUserFlip,
          current_user_data: {
            ...state.current_user_data,
            records_display_option: [
              {
                ...state.current_user_data.records_display_option[0],
                freestyle: {
                  ...state.current_user_data.records_display_option[0].freestyle,
                  flip: action.payload.show,
                }
              }
            ],
          }
        };
    case 'SET_START':
      const updateUserStart = state.users.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              records_display_option: [
                {
                  ...data.records_display_option[0],
                  freestyle: {
                    ...data.records_display_option[0].freestyle,
                    start: action.payload.show,
                  },
                },
              ],
            }
          : data
      );
        return {
          ...state,
          users: updateUserStart,
          current_user_data: {
            ...state.current_user_data,
            records_display_option: [
              {
                ...state.current_user_data.records_display_option[0],
                freestyle: {
                  ...state.current_user_data.records_display_option[0].freestyle,
                  start: action.payload.show,
                }
              }
            ],
          }
        };
    case 'SET_FIN':
      const updateUserFin = state.users.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              records_display_option: [
                {
                  ...data.records_display_option[0],
                  freestyle: {
                    ...data.records_display_option[0].freestyle,
                    fin: action.payload.show,
                  },
                },
              ],
            }
          : data
      );
        return {
          ...state,
          users: updateUserFin,
          current_user_data: {
            ...state.current_user_data,
            records_display_option: [
              {
                ...state.current_user_data.records_display_option[0],
                freestyle: {
                  ...state.current_user_data.records_display_option[0].freestyle,
                  fin: action.payload.show,
                }
              }
            ],
          }
        };
    default:
      return state;
  }
};

export default developedDataReducer;