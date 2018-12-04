import * as actionTypes from '../actions';

const initialState = {
  categories: [
    {
      id: 1, name: 'Категория 1', description: 'Описание категории 1', tasks_id: [1, 2, 4, 3],
    },
    {
      id: 2, name: 'Категория 2', description: 'Описание категории 2', tasks_id: [1, 2],
    },
    {
      id: 3, name: 'Категория 3', description: 'Описание категории 3', tasks_id: [3, 5],
    },
    {
      id: 4, name: 'Категория 4', description: 'Описание категории 4', tasks_id: [5],
    },
    {
      id: 5, name: 'Категория 5', description: 'Описание категории 5', tasks_id: [1, 3],
    },
    {
      id: 6, name: 'Категория 6', description: 'Описание категории 6', tasks_id: [2, 5],
    },
    {
      id: 7, name: 'Категория 7', description: 'Описание категории 7', tasks_id: [1, 5],
    },
  ],
  tasks: [
    {
      id: 1, author_id: 1, name: 'Задание 1', description: 'Описание задания 1', categories_id: [1, 2, 5, 7],
    },
    {
      id: 2, author_id: 2, name: 'Задание 2', description: 'Описание задания 2', categories_id: [2, 1, 6],
    },
    {
      id: 3, author_id: 1, name: 'Задание 3', description: 'Описание задания 3', categories_id: [3, 1, 5],
    },
    {
      id: 4, author_id: 2, name: 'Задание 4', description: 'Описание задания 4', categories_id: [1],
    },
    {
      id: 5, author_id: 1, name: 'Задание 5', description: 'Описание задания 5', categories_id: [6, 3, 4, 7],
    },
  ],
  users: [
    { id: 1, login: 'admin', name: 'Админ' },
    { id: 2, login: 'jokerety', name: 'Роман' },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORIES_INIT:
      return {
        ...state,
        categories: [],
      };
    case actionTypes.CATEGORIES_REMOVE:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
