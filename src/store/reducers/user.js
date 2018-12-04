import * as actionTypes from '../actions';

const initialState = {
  user: {
    id: 0,
    is_authorized: false,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: {
          id: 2,
          is_authorized: true,
        },
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        user: {
          id: 0,
          is_authorized: false,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
