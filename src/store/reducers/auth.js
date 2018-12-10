import * as actionTypes from '../actions/actions';

const initialState = {
  token: null,
  error: null,
  loading: false,
  userId: 0,
};

const authStart = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const authSuccess = (state, action) => ({
  ...state,
  token: action.payload.token,
  error: null,
  loading: false,
  userId: Number(action.payload.userId),
});

const authFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

const logout = (state, action) => ({
  ...state,
  token: null,
  userId: 0,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAILED: return authFail(state, action);
    case actionTypes.LOGOUT: return logout(state, action);
    default: return state;
  }
};
export default reducer;
