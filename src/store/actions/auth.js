import axios from 'axios';
import * as actionTypes from './actions';
import { getUser } from './categories';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: { token, userId },
});

export const authFailed = error => ({
  type: actionTypes.AUTH_FAILED,
  error,
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOGOUT,
  };
};

export const auth = (username, password) => (dispatch) => {
  dispatch(authStart());
  console.log('+');
  axios.post('http://172.18.0.4:8000/login2/', { username, password })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      console.log(res.data.token, res.data.userId);
      dispatch(getUser(res.data.userId));
      dispatch(authSuccess(res.data.token, res.data.userId));
    }).catch((err) => {
      console.log(err);
      dispatch(authFailed(err));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  if (token) {
    dispatch(authSuccess(token, userId));
  }
};
