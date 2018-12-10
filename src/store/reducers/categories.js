import * as actionTypes from '../actions/actions';
function getElementById(array, number) {
  return array.find(elem => elem.id === number);
}


const initialState = {
  users: [],
  categories: [],
  tasks: [],
};

const userGetAll = (state, action) => {
  const { users } = action.payload;
  console.log(users);
  return {
    ...state,
    users,
  };
};
const categoriesGetAll = (state, action) => {
  const { categories } = action.payload;
  console.log(categories);
  return {
    ...state,
    categories,
  };
};
const tasksGetAll = (state, action) => {
  const { tasks } = action.payload;
  console.log(tasks);
  return {
    ...state,
    tasks,
  };
};

const newTask = (state, action) => {
  const { task } = action.payload;
  const newCategories = state.categories;
  console.log(task.categories_id);
  task.categories_id
    .map((categoryId) => {
      const category = getElementById(newCategories, categoryId);
      category.tasks_id.push(task.id);
    });

  console.log(newCategories);

  return {
    ...state,
    tasks: [...state.tasks, task],
    categories: newCategories,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_GET_ALL: return userGetAll(state, action);
    case actionTypes.CATEGORIES_GET_ALL: return categoriesGetAll(state, action);
    case actionTypes.TASKS_GET_ALL: return tasksGetAll(state, action);
    case actionTypes.NEW_TASK: return newTask(state, action);
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
