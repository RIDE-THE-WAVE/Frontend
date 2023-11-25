const initialState = {};

const developedDataReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_DEVELOPED_DATA':
      return action.payload;

    // ****************
    case 'SET_DEVELOPED_DATA_RECORDS':
      // console.log('users', state.users);
      // console.log('id', action.payload.id);
      // console.log('record', action.payload.record);
      const updateData = state.users.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              // 주석된 형태가 더 적절한 것 같다.
              // records: {
              //   ...data.records,
                freestyle: {
                  ...action.payload.record,
                },
              // },
            }
          : data
      );
      return {
        // payload 의 users 를 순회하면서 records 의 id 와 users 의 user 가 같은 것에 records 데이터 주착
        ...state,
        users: updateData,
      }

    case 'SET_CURRENT_USER_DEVELOPED_DATA_RECORDS':
      console.log('id', action.payload.id);
      console.log('record', action.payload.record);
      return {
        
      }

    // ****************

    case 'SET_RECORDS_DISPLAY_OPTION':
      const { id, records_display_option } = action.payload;
      return {
        ...state,
        users: state.users.map(user => 
          user.id === id ? { ...user, records_display_option } : user
        ),
      };

    case 'SET_CURRENT_USER_RECORDS_DISPLAY_OPTION':
      // 현재 유저는 따로 처리해줘야 한다.
      return {
        ...state,
        current_user_data: {
          ...state.current_user_data,
          records_display_option: [
            ...action.payload.records_display_option,
          ]
        },
      };

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