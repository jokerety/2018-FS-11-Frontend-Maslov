import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TaskList from '../../components/Categories/TaskList/TaskList';
import CategoriesShow from '../../components/Categories/Categories';
import LoginPage from '../../components/User/login';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/category" component={CategoriesShow} />
        <Route exact path="/category/:id/detail" component={TaskList} />
      </div>

    );
  }
}
export default CategoriesContainer;
