import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskList from '../../components/Categories/TaskList/TaskList';
import CategoriesShow from '../../components/Categories/Categories';
import TaskPage from '../../components/Categories/TaskList/TaskPage';


class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let authRedirect = null;
    if (!this.props.isAuthed) {
      authRedirect = <Redirect to="/" />;
      return (
          <TaskPage />
      )
    }
    return (
      <div>
        <Route exact path="/category" component={CategoriesShow} />
        <Route exact path="/category/:id/detail" component={TaskList} />
        <Route exact path="/category/:id/detail/task/:id" component={TaskPage} />
        {authRedirect}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  isAuthed: state.auth.token !== null,
});

export default connect(mapStateToProps)(CategoriesContainer);
