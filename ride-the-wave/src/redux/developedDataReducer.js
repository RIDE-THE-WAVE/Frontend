const initialState = {};

const developedDataReducer = (state = initialState, action) => {
  const userArrayKey = Object.keys(state).filter(key => !isNaN(key));
  const userArray = userArrayKey.map((key) => state[key]);
  let updatedUserArray;

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
      updatedUserArray = userArray.map((data) => {
        if (data.id === action.payload.id) {
          // 해당 객체를 찾았으면 새로운 객체를 생성하여 id를 업데이트
          return {
            ...data,
            records_display_option: [
              {
                ...data.records_display_option[0],
                freestyle: {
                  ...data.records_display_option[0].freestyle,
                  side: action.payload.show,
                }
              }
            ],
          };
        }
        return data; // 해당 객체가 아니면 그대로 반환
      });
    case 'SET_FLIP':
      updatedUserArray = userArray.map((data) => {
        if (data.id === action.payload.id) {
          // 해당 객체를 찾았으면 새로운 객체를 생성하여 id를 업데이트
          return {
            ...data,
            records_display_option: [
              {
                ...data.records_display_option[0],
                freestyle: {
                  ...data.records_display_option[0].freestyle,
                  flip: action.payload.show,
                }
              }
            ],
          };
        }
        return data; // 해당 객체가 아니면 그대로 반환
      });
    case 'SET_START':
      updatedUserArray = userArray.map((data) => {
        if (data.id === action.payload.id) {
          // 해당 객체를 찾았으면 새로운 객체를 생성하여 id를 업데이트
          return {
            ...data,
            records_display_option: [
              {
                ...data.records_display_option[0],
                freestyle: {
                  ...data.records_display_option[0].freestyle,
                  start: action.payload.show,
                }
              }
            ],
          };
        }
        return data; // 해당 객체가 아니면 그대로 반환
      });
    case 'SET_FIN':
      updatedUserArray = userArray.map((data) => {
        if (data.id === action.payload.id) {
          // 해당 객체를 찾았으면 새로운 객체를 생성하여 id를 업데이트
          return {
            ...data,
            records_display_option: [
              {
                ...data.records_display_option[0],
                freestyle: {
                  ...data.records_display_option[0].freestyle,
                  fin: action.payload.show,
                }
              }
            ],
          };
        }
        return data; // 해당 객체가 아니면 그대로 반환
      });
    default:
      return state;
  }
};

export default developedDataReducer;