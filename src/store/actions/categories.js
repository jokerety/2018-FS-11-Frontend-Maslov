import axios from 'axios';
import * as actionTypes from './actions';

export const getAllUsersToPayload = users => ({
  type: actionTypes.USER_GET_ALL,
  payload: { users },
});
export const getAllCategoriesToPayload = categories => ({
  type: actionTypes.CATEGORIES_GET_ALL,
  payload: { categories },
});
export const getAllTasksToPayload = tasks => ({
  type: actionTypes.TASKS_GET_ALL,
  payload: { tasks },
});

export const getUser = userId => ({
  type: actionTypes.USER_GET,
  payload: { userId },
});

export const getAllUsers = () => (dispatch) => {
  axios.get('http://172.18.0.4:8000/get_all_users/')
    .then((result) => {
      console.log(result);
      dispatch(getAllUsersToPayload(result.data));
    })
    .catch(error => console.log(error));
};

export const getAllCategories = () => (dispatch) => {
  axios.get('http://172.18.0.4:8000/get_all_categories/')
    .then((result) => {
      console.log(result);
      dispatch(getAllCategoriesToPayload(result.data));
    })
    .catch(error => console.log(error));
};


export const getAllTasks = () => (dispatch) => {
  axios.get('http://172.18.0.4:8000/get_all_tasks/')
    .then((result) => {
      console.log(result);
      dispatch(getAllTasksToPayload(result.data));
    })
    .catch(error => console.log(error));
};

export const newTask = task => ({
  type: actionTypes.NEW_TASK,
  payload: { task },
});


